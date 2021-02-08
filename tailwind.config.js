module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    ringColor: {
      input: '#989EA7',
      'input-blue': '#33A6BA',
      danger: '#FF7B92'
    },
    borderColor: theme => ({
      input: '#313E4F',
      line: '#E8EDF3'
    }),
    width: {
      save: '67px',
      default: '317px'
    },
    height: {
      close: '100px',
      delete: 0,
      open: '350px',
      input: '40px',
      location: '750px',
      'location-warning': '860px',
      'button-location': '70px',
      navbar: '80px'
    },
    space: {
      sp: '8px',
      btn: '58px',
      'icon-btn': '11px',
      check: '21px'
    },
    borderRadius: {
      all: '8px',
      input: '4px',
      up: '8px 8px 0px 0px',
      down: '0px 0px 8px 8px'
    },
    margin: {
      card: '25px 0 0 0',
      line: '16px 0 19px 0!important',
      'line-location': '16px 0 24px 0!important',
      title: '48px',
      'title-location': '0 0 40px 0',
      asterisk: '0 4px',
      input: '0 0 24px 0',
      warning: '2px 0 0 0',
      delete: 0,
    },
    padding: {
      'add-button-y': '16px',
      'add-button-x': '24px',
      card: '24px',
      input: '10px 12px 10px 12px',
      save: '8px 16px 8px 16px',
      delete: 0,
    },
    fontSize: {
      header: '24px',
      'sub-header': '16px',
      icon: '18px',
      person: '20px',
      button: '12px',
      twelve: '12px',
      check: '14px'
    },
    extend: {
      colors: {
        'blue-background': '#E8EDF3',
        'blue-header': '#33A6BA',
        'blue-add': '#33A6BA',
        'blue-office-card': '#313E4F',
        'gray-office-card': '#989EA7',
        danger: '#FF7B92',
        check: '#33A6BA'
      },
    },
  },
  variants: {},
  plugins: [],
}
