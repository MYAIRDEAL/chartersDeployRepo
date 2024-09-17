/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        hoverColor: '#D1AF77',
        selectType: '#1A1A1A',
        lable: '#D4B183',
        error: '#d4c583',
      },
      screens: {
        '344': '344px',
        '375': '375px',
        '500': '500px',
        '380': '380px',
        '360': '360px',
        '400': '400px',
        '768': '768px',
        '800': '800px',
        '1024': '1024px',
        '1025': '1025px',
        '1200': '1200px',
        '1367': '1367px',
        '700': '700px',
        '900': '900px',
        '1487': '1487px',
        '540': '540px',
        '650': '650px',
        '600': '600px',
        '1150': '1150px',
        '370': '370px',
      },
    },
  },
  plugins: [],
}