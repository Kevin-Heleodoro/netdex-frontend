<a name="readme-top"></a>
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.khoury.northeastern.edu/NEU-CS5610-SU23/NetDex-frontend">
    <img src="src/img/readme/logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">NetDex Frontend</h3>

  <p align="center">
    This project serves as the front end for the NetDex application. The client side is rendered through React and provides Google OAuth authentication services.
    The NetDex application provides the end user a way to organize their professional network in a simplistic and easy to understand interface. Think of your favorite professional social media platform. Now remove the social media portion of it. This is a tool for the user to maintain contact with their network without all the frills that come with being on a social media platform.
    <br/><br/>"Contacts, without the contact."<br/><br/>
    Link to <a href="https://github.khoury.northeastern.edu/NEU-CS5610-SU23/NetDex-backend">NetDex frontend</a>
    <br/> 
    <br />
    <a href="https://github.khoury.northeastern.edu/NEU-CS5610-SU23/NetDex-frontend"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://netdex-frontend.ue.r.appspot.com/">View Demo</a>
    ·
    <a href="https://github.khoury.northeastern.edu/NEU-CS5610-SU23/NetDex-frontend/issues">Report Bug</a>
    ·
    <a href="https://github.khoury.northeastern.edu/NEU-CS5610-SU23/NetDex-frontend/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
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
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

<!-- <p align="right">(<a href="#readme-top">back to top</a>)</p> -->

### Built With

-   [![Node][Node.js]][Node-url]
-   [![Jest][Jest]][Jest-url]
-   [![React][React]][React-url]
-   [![Google-Cloud][Google-Cloud]][Google-Cloud-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

Ensure you have the latest version of npm installed.

```sh
npm install npm@latest -g
```

Ensure you have version 18.15.0 of node installed through NVM.

```sh
nvm install 18.15.0
```

Ensure you have the latest version of yarn installed.

```sh
npm install -g yarn
```

### Installation

1. Clone the repo
    ```sh
    git clone https://github.khoury.northeastern.edu/NEU-CS5610-SU23/NetDex-frontend.git
    ```
2. Install NPM packages
    ```sh
    yarn install
    ```
3. Start frontend server\*\*
    ```sh
    yarn start
    ```

\*\* Ensure that you have the backend server running so data can be fetched.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES
## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_

<p align="right">(<a href="#readme-top">back to top</a>)</p> -->

<!-- ROADMAP -->

## Roadmap

### To - Do's

-   [ ] Fix navbar layout so login button does not overlap the home button

### Release 1

-   Google login
    -   Users can login/logout of the application using their Google accounts
-   Created basic structure of where components will be located and added routing to them.

![Home-Page-Screenshot][Home-Page-Screenshot]

### Release 2

-   Login button does not work on mobile.
    -   If not logged in, the user should be presented with a login option and that's it.
-   Contact Cards:
    -   Company website + logo
    -   phone number
    -   image
-   Watermark logo for the main page
-   Navbar should hide when in collapsed mode
    -   Links should be stacked

### Release 3

-   User Profile retrieving database user information and populating it into editable form.
-   If a user is logging in the for first time, a database entry will be created for them automatically once they click on the 'Profile' link.

![Contact-Details-Modal][Contact-Details-Modal]

TO DO:

-   style cards better

See the [open issues](https://github.khoury.northeastern.edu/NEU-CS5610-SU23/NetDex-frontend/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Kevin Heleodoro - [@Golden_Sun_Kev](https://twitter.com/Golden_Sun_Kev) - heleodoro.k@northeastern.edu

Project Link: [https://github.khoury.northeastern.edu/NEU-CS5610-SU23/NetDex-frontend](https://github.khoury.northeastern.edu/NEU-CS5610-SU23/NetDex-frontend)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

-   [README badges](https://dev.to/envoy_/150-badges-for-github-pnk)
-   [Memory Router](https://reactrouter.com/en/main/router-components/memory-router)
    <!-- * []() -->

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/kevin-heleodoro
[Node.js]: https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white
[Node-url]: https://nodejs.org/en
[Jest]: https://img.shields.io/badge/Jest-323330?style=for-the-badge&logo=Jest&logoColor=white
[Jest-url]: https://jestjs.io/
[React]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://react.dev/
[Google-Cloud]: https://img.shields.io/badge/Google_Cloud-4285F4?style=for-the-badge&logo=google-cloud&logoColor=white
[Google-Cloud-url]: https://cloud.google.com/
[Home-Page-Screenshot]: src/img/readme/home-page-release-1.png
[Contact-Details-Modal]: src/img/readme/contact-details-modal.png
