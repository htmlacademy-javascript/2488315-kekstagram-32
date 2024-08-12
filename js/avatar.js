const FILE_TYPES = ['jpg', 'jpeg', 'png'];
const imageElement = document.querySelector('.img-upload__preview img');
const fileChooserElement = document.querySelector('.img-upload__start input[type=file]');
const previewElements = document.querySelectorAll('.effects__preview');

const loadingPicture = () => {
  fileChooserElement.addEventListener('change', () => {
    const file = fileChooserElement.files[0];
    const fileName = file.name.toLowerCase();

    const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

    if (matches) {
      const image = URL.createObjectURL(file);
      imageElement.src = image;
      previewElements.forEach ((item) => {
        item.style.backgroundImage = `url(${image})`;
      });
    }
  });
};

export { loadingPicture };
