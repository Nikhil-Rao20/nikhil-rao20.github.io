/**
 * GradCAM Explorer - Interactive visualization for research paper pages
 * Allows comparison of GradCAM visualizations across models and classes
 */

(function() {
  'use strict';

  // Configuration - can be overridden before init
  const CONFIG = {
    models: [],
    classes: [],
    basePath: './media/assets/',
    imageExtension: '.png',
    maxWarningThreshold: 20
  };

  // State
  let selectedModels = new Set();
  let selectedClasses = new Set();

  /**
   * Initialize the GradCAM Explorer
   * @param {Object} options - Configuration options
   */
  function init(options) {
    Object.assign(CONFIG, options);
    
    setupModelPills();
    setupClassCheckboxes();
    setupLightbox();
    updateSummary();
  }

  /**
   * Setup model toggle pills
   */
  function setupModelPills() {
    const container = document.getElementById('model-pills');
    if (!container) return;

    container.innerHTML = '';
    
    CONFIG.models.forEach(model => {
      const pill = document.createElement('div');
      pill.className = 'model-pill';
      pill.dataset.model = model.id;
      pill.innerHTML = `<span class="pill-check">☐</span> ${model.name}`;
      
      pill.addEventListener('click', () => toggleModel(model.id, pill));
      container.appendChild(pill);
    });
  }

  /**
   * Toggle model selection
   */
  function toggleModel(modelId, pill) {
    if (selectedModels.has(modelId)) {
      selectedModels.delete(modelId);
      pill.classList.remove('active');
      pill.querySelector('.pill-check').textContent = '☐';
    } else {
      selectedModels.add(modelId);
      pill.classList.add('active');
      pill.querySelector('.pill-check').textContent = '☑';
    }
    updateSummary();
    generateResults();
  }

  /**
   * Setup class checkboxes
   */
  function setupClassCheckboxes() {
    const container = document.getElementById('class-checkboxes');
    if (!container) return;

    container.innerHTML = '';
    
    CONFIG.classes.forEach(cls => {
      const item = document.createElement('label');
      item.className = 'class-checkbox-item';
      item.dataset.classId = cls.id;
      item.innerHTML = `
        <input type="checkbox" value="${cls.id}">
        <span>${cls.name}</span>
      `;
      
      const checkbox = item.querySelector('input');
      checkbox.addEventListener('change', () => toggleClass(cls.id, item, checkbox));
      container.appendChild(item);
    });
  }

  /**
   * Toggle class selection
   */
  function toggleClass(classId, item, checkbox) {
    if (checkbox.checked) {
      selectedClasses.add(classId);
      item.classList.add('selected');
    } else {
      selectedClasses.delete(classId);
      item.classList.remove('selected');
    }
    updateSummary();
    generateResults();
  }

  /**
   * Setup class search filter
   */
  function setupClassSearch() {
    const searchInput = document.getElementById('class-search');
    if (!searchInput) return;

    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase();
      const items = document.querySelectorAll('.class-checkbox-item');
      
      items.forEach(item => {
        const text = item.querySelector('span').textContent.toLowerCase();
        item.classList.toggle('hidden', !text.includes(query));
      });
    });
  }

  /**
   * Select all classes
   */
  function selectAllClasses() {
    const items = document.querySelectorAll('.class-checkbox-item:not(.hidden)');
    items.forEach(item => {
      const checkbox = item.querySelector('input');
      if (!checkbox.checked) {
        checkbox.checked = true;
        const classId = item.dataset.classId;
        selectedClasses.add(classId);
        item.classList.add('selected');
      }
    });
    updateSummary();
    generateResults();
  }

  /**
   * Clear all class selections
   */
  function clearAllClasses() {
    const items = document.querySelectorAll('.class-checkbox-item');
    items.forEach(item => {
      const checkbox = item.querySelector('input');
      checkbox.checked = false;
      item.classList.remove('selected');
    });
    selectedClasses.clear();
    updateSummary();
    generateResults();
  }

  /**
   * Select all models
   */
  function selectAllModels() {
    const pills = document.querySelectorAll('.model-pill');
    pills.forEach(pill => {
      const modelId = pill.dataset.model;
      if (!selectedModels.has(modelId)) {
        selectedModels.add(modelId);
        pill.classList.add('active');
        pill.querySelector('.pill-check').textContent = '☑';
      }
    });
    updateSummary();
    generateResults();
  }

  /**
   * Clear all model selections
   */
  function clearAllModels() {
    const pills = document.querySelectorAll('.model-pill');
    pills.forEach(pill => {
      pill.classList.remove('active');
      pill.querySelector('.pill-check').textContent = '☐';
    });
    selectedModels.clear();
    updateSummary();
    generateResults();
  }

  /**
   * Filter classes by search query
   */
  function filterClasses() {
    const searchInput = document.getElementById('class-search');
    if (!searchInput) return;
    
    const query = searchInput.value.toLowerCase();
    const items = document.querySelectorAll('.class-checkbox-item');
    
    items.forEach(item => {
      const text = item.querySelector('span').textContent.toLowerCase();
      item.classList.toggle('hidden', !text.includes(query));
    });
  }

  /**
   * Update selection summary text
   */
  function updateSummary() {
    const summaryEl = document.getElementById('summary-text');
    if (!summaryEl) return;

    const modelCount = selectedModels.size;
    const classCount = selectedClasses.size;
    const totalImages = modelCount * classCount;
    
    if (modelCount === 0 && classCount === 0) {
      summaryEl.textContent = 'Select models and classes to compare';
    } else if (modelCount === 0) {
      summaryEl.textContent = `${classCount} class${classCount !== 1 ? 'es' : ''} selected - select models to view`;
    } else if (classCount === 0) {
      summaryEl.textContent = `${modelCount} model${modelCount !== 1 ? 's' : ''} selected - select classes to view`;
    } else {
      summaryEl.textContent = `${modelCount} model${modelCount !== 1 ? 's' : ''} × ${classCount} class${classCount !== 1 ? 'es' : ''} = ${totalImages} images`;
    }
  }

  /**
   * Generate results grid
   */
  function generateResults() {
    const resultsContainer = document.getElementById('gradcam-results');
    if (!resultsContainer) return;

    if (selectedModels.size === 0 || selectedClasses.size === 0) {
      resultsContainer.innerHTML = `
        <div class="results-placeholder">
          <i>🔍</i>
          <p>Select models and classes above to compare GradCAM visualizations</p>
        </div>
      `;
      return;
    }

    const totalImages = selectedModels.size * selectedClasses.size;
    let html = '';

    // Warning for large selections
    if (totalImages > CONFIG.maxWarningThreshold) {
      html += `<div class="warning-message">
        <span>⚠️</span>
        <span>Loading ${totalImages} images - this may take a moment</span>
      </div>`;
    }

    // Create grid
    const colCount = Math.min(selectedModels.size, 7);
    html += `<div class="results-grid" data-cols="${colCount}">`;

    // Get ordered arrays
    const modelsArray = CONFIG.models.filter(m => selectedModels.has(m.id));
    const classesArray = CONFIG.classes.filter(c => selectedClasses.has(c.id));

    // Generate cards grouped by class
    classesArray.forEach(cls => {
      html += `<div class="class-label">${cls.name}</div>`;
      html += '<div class="class-row">';
      
      modelsArray.forEach(model => {
        const imgPath = `${CONFIG.basePath}${model.id}/${cls.id}${CONFIG.imageExtension}`;
        html += `
          <div class="gradcam-card" onclick="GradCAMExplorer.openLightbox('${imgPath}', '${model.name} - ${cls.name}')">
            <img src="${imgPath}" alt="${model.name} - ${cls.name}" loading="lazy">
            <div class="card-label">${model.name}</div>
          </div>
        `;
      });
      
      html += '</div>';
    });

    html += '</div>';
    resultsContainer.innerHTML = html;
  }

  /**
   * Setup lightbox functionality
   */
  function setupLightbox() {
    const overlay = document.getElementById('lightbox-overlay');
    if (!overlay) return;

    // Close on overlay click
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        closeLightbox();
      }
    });

    // Close on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeLightbox();
      }
    });

    // Close button
    const closeBtn = overlay.querySelector('.lightbox-close');
    if (closeBtn) {
      closeBtn.addEventListener('click', closeLightbox);
    }
  }

  /**
   * Open lightbox with image
   */
  function openLightbox(src, caption) {
    const overlay = document.getElementById('lightbox-overlay');
    const img = document.getElementById('lightbox-img');
    const captionEl = document.getElementById('lightbox-caption');
    
    if (overlay && img) {
      img.src = src;
      if (captionEl) captionEl.textContent = caption;
      overlay.classList.add('active');
    }
  }

  /**
   * Close lightbox
   */
  function closeLightbox() {
    const overlay = document.getElementById('lightbox-overlay');
    if (overlay) {
      overlay.classList.remove('active');
    }
  }

  // Expose public API
  window.GradCAMExplorer = {
    init: init,
    selectAllClasses: selectAllClasses,
    clearAllClasses: clearAllClasses,
    selectAllModels: selectAllModels,
    clearAllModels: clearAllModels,
    filterClasses: filterClasses,
    openLightbox: openLightbox,
    closeLightbox: closeLightbox
  };

})();
