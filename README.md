# directus-display-qrcode

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Compile it yourself</a></li>
        <li><a href="#installation">Install the precompiled Extension</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

This is a simple [Directus 9](https://directus.io/) Display Extension, which allows to display and download QR-Codes directly inside of the Directus UI.
It takes a String input and renders a QR-Code when clicking on the String Value in the Collection overview. It opens a Modal when clicking on the Popup which gives you more Options as to download the QR-Code.

To display and scan QR-Codes on the Collection Editing Page, check out [directus-interface-qrcode](https://github.com/K3-Network/directus-interface-qrcode).

### Built With

- [Vue](https://github.com/vuejs/vue)
- [qrcode.vue](https://github.com/scopewu/qrcode.vue)
- [SASS](https://github.com/sass/sass)

<!-- GETTING STARTED -->

## Getting Started

There are 2 ways to get up and running. Either you compile the Extension yourself, or you download the precompiled Extension:

### Compile it yourself

1. Clone the repo

```sh
 git clone https://github.com/K3-Network/directus-display-qrcode.git
```

2. Install NPM packages
   ```sh
   npm install
   ```
3. Compile the Extension
   ```sh
   npx directus-extension build
   ```
4. Copy the `directus-display-qrcode\dist\index.js` into your Directus Installation: `Your-Directus-Installation\extensions\displays\directus-display-qrcode\index.js`

5. Restart Directus

### Install the precompiled Extension

1. Download the [Binaries](https://github.com/K3-Network/directus-display-qrcode/releases/latest/download/directus-display-qrcode.zip)
2. Extract the ZIP into `Your-Directus-Installation\extensions\displays\`

3. Restart Directus

<!-- ROADMAP -->

## Roadmap

See the [open issues](https://github.com/K3-Network/directus-display-qrcode/issues) for a list of proposed features (and known issues).

<!-- LICENSE -->

## License

Distributed under the ISC License. See `LICENSE` for more information.

<!-- CONTACT -->

## Contact

[Nicolas Mierbach](https://github.com/nico-k3) - K3.Network

Project Link: [https://github.com/K3-Network/directus-display-qrcode](https://github.com/K3-Network/directus-display-qrcode)
