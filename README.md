# TesTheater

TesTheater is a project that provides a clean fullscreen dashboard for accessing major German streaming services. Intended for convenient display on devices like TVs or in home theater setups, TesTheater utilizes a YouTube redirect technique to open the selected streaming service in fullscreen mode. This allows the streaming experience to start quickly and seamlessly.

## Features

- **Dashboard Interface:** Presents a simple menu to choose among German streaming platforms.
- **Fullscreen Launch:** Opens the chosen service directly in fullscreen using a YouTube redirect method.
- **Quick Access:** Designed for fast selection and launching.

## Supported Streaming Services

Currently supports (you can contribute more streaming services by opening a pull request!):

- Netflix Germany
- Amazon Prime Video Deutschland
- Disney+ Deutschland
- Paramount Plus
- Plex
- WOW
- JOYN
- RTL+
- DAZN
- Magenta Sport
- Apple TV
- ARD Mediathek
- ZDF Mediathek

## How it Works

TesTheater uses a YouTube redirect trick to launch selected streaming services in fullscreen mode. When a user selects a streaming service in the dashboard, TesTheater redirects to a YouTube link configured to open the desired streaming site in fullscreen — creating a more immersive, TV-like experience.

## Usage

1. **Open TesTheater in Your Tesla:**
    - Visit [`https://duell10111.github.io/TesTheater/`](https://duell10111.github.io/TesTheater/) using your Tesla's web browser.
    - Alternatively, you may open the site on any modern web browser for testing.
2. **Select Your Streaming Service:**
    - Tap the desired service icon; TesTheater will open it in fullscreen (via the redirect method).

## Adding a New Streaming Service

Contributions are welcome! To add a new service, follow these steps and submit a Pull Request (PR):

1. **Edit the LinkData.ts File:**
    - Navigate to `src/data/LinkData.ts` (or the equivalent location).
    - Add a new entry in the exported array/object with:
        - `name`: The display name of your service.
        - `url`: The redirect URL used to open the service.
        - `logo`: The filename of your SVG logo (see next step).

   Example entry:
   ```typescript
   {
     name: "YourServiceName",
     url: "https://your-service-url.com",
     logo: "yourServiceLogo.svg"
   }
   ```

2. **Add the Logo SVG:**
    - Place an SVG logo for your new service in the designated logo directory, typically `src/assets/logos/`.
    - Ensure the logo filename matches what you specified in `LinkData.ts`.

   Example:
   ```
   src/assets/logos/yourServiceLogo.svg
   ```

3. **Submit a Pull Request:**
    - Fork the repository, push your changes to a branch, and open a PR with a brief description of the new service and logo.

## Requirements

- Tesla vehicle with browser, or any device with modern web browser. 😉
- Internet connection

## Disclaimer

TesTheater does not provide access to streaming content itself. It simply offers quick links to external, legal streaming platforms. Users are responsible for their own streaming accounts and subscriptions. This project is intended for personal, non-commercial use.

## License

[GNU GENERAL PUBLIC LICENSE](LICENSE)

---

*Made with ❤️ for German streaming fans in Tesla vehicles and beyond!*
