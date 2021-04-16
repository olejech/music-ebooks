var options = {
  classNames: {
    containerOuter: 'choices payment-card__text-field-select-outer',
    containerInner: 'choices__inner payment-card__text-field-select-inner',
    item: 'choices__item payment-card__text-field-select-item',
    focusState: 'is-focused',
    openState: 'is-open',
  },
  searchEnabled: false,
  searchChoices: false,
  placeholder: true,
  placeholderValue: 'Country',
  choices: [
    {
      value: 'Option 1',
      label: 'Option 1',
    },
    {
      value: 'Option 2',
      label: 'Option 2',
    },
  ],
  itemSelectText: '',
}

var element = document.querySelector('.js-select')
var choices = new Choices(element, options)
