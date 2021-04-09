export default function (el, binding) {
  Object.keys(binding.value).forEach((position) => {
  // eslint-disable-next-line no-param-reassign
    el.style[position] = binding.value[position];
  });
  // eslint-disable-next-line no-param-reassign
  el.style.position = 'absolute';
}
