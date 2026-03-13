(function () {
    const zoneUpload        = document.getElementById('zoneUpload');
    const champImage        = document.getElementById('champImage');
    const zoneApercu        = document.getElementById('zoneApercu');
    const apercuImage       = document.getElementById('apercuImage');
    const zoneUploadContenu = document.getElementById('zoneUploadContenu');
    const btnSupprimer      = document.getElementById('btnSupprimerImage');
    const MAX_SIZE          = 500 * 1024 * 1024;

    function afficherApercu(file) {
        if (!file) return;
        if (file.size > MAX_SIZE) {
            alert('Le fichier dépasse la limite de 500 Mo.');
            champImage.value = '';
            return;
        }
        const reader = new FileReader();
        reader.onload = function (e) {
            apercuImage.src = e.target.result;
            zoneApercu.style.display = 'block';
            zoneUploadContenu.style.display = 'none';
        };
        reader.readAsDataURL(file);
    }

    champImage.addEventListener('change', function () { afficherApercu(this.files[0]); });

    btnSupprimer.addEventListener('click', function () {
        champImage.value = '';
        apercuImage.src  = '';
        zoneApercu.style.display        = 'none';
        zoneUploadContenu.style.display = 'flex';
    });

    zoneUpload.addEventListener('dragover', function (e) {
        e.preventDefault();
        zoneUpload.classList.add('zone-upload--survol');
    });

    zoneUpload.addEventListener('dragleave', function () {
        zoneUpload.classList.remove('zone-upload--survol');
    });

    zoneUpload.addEventListener('drop', function (e) {
        e.preventDefault();
        zoneUpload.classList.remove('zone-upload--survol');
        const file = e.dataTransfer.files[0];
        if (file && file.type.startsWith('image/')) {
            const dt = new DataTransfer();
            dt.items.add(file);
            champImage.files = dt.files;
            afficherApercu(file);
        }
    });
})();
