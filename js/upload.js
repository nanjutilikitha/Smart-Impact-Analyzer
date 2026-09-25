document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('uploadForm');
    const oldInput = document.getElementById('oldRequirement');
    const newInput = document.getElementById('newRequirement');
    const oldPreview = document.getElementById('oldPreview');
    const newPreview = document.getElementById('newPreview');
    const status = document.getElementById('analysisStatus');

    const updatePreview = (input, target) => {
        if (!input.files.length) {
            target.textContent = 'No file selected';
            return;
        }

        const file = input.files[0];
        const size = (file.size / 1024).toFixed(1);
        target.textContent = `${file.name} • ${size} KB`;
    };

    if (oldInput) oldInput.addEventListener('change', () => updatePreview(oldInput, oldPreview));
    if (newInput) newInput.addEventListener('change', () => updatePreview(newInput, newPreview));

    if (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault();

            if (!oldInput?.files.length || !newInput?.files.length) {
                status.classList.add('error');
                status.textContent = 'Please select both requirement files before analysis.';
                return;
            }

            status.classList.remove('error');
            status.textContent = `Preparing analysis for ${oldInput.files[0].name} and ${newInput.files[0].name}...`;

            setTimeout(() => {
                status.textContent = 'Analysis preview ready. Review the dashboard and report pages for the next steps.';
            }, 900);
        });
    }
});
