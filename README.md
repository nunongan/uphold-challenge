## Uphold Challenge 

> Uphold serves 184+ countries, across 200+ currencies (traditional and crypto) and commodities with frictionless foreign exchange and cross-border remittance for members around the world. Since our launch in 2015, Uphold has powered more than US$4+ billion in transactions.

###

> Uphold is a multi-asset digital money platform offering financial services to a global market. Uphold's unique ‘Anything-to-Anything’ trading experience enables customers to trade directly between asset classes with embedded payments facilitating a future where everyone has access to financial services. Built on a core of proprietary technologies and e-money apps, Uphold embraces a future where people and businesses around the world have access to safe, transparent, fair, and affordable financial services.

Read more at **[Uphold](https://uphold.com/en-eu/resources/about)**

---

### Powered by

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

---

### 📜 The Challenge

> As a User, I want to see an input amount displayed according to the exchange rates for the
different currencies supported by Uphold.

### ✅ Acceptance Criteria

- The user input amount should be USD by default.
- Should be able to change between currencies.
- Should update the values for every currency on user interaction using a
debounce mechanism.
- Should have all the values cached upon the first request.
- Should make a new API call in the background, re-populating the cached value,
when changing between currencies.

### 🚨 Musts

- Use React
- Use ES6
- List atleast 10 different currencies
- Use Uphold Javascript SDK

---

### 🔧 Getting Started

1. Clone the repository:

    ```bash
    git clone https://github.com/nunongan/uphold-challenge.git
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Set up your Uphold API credentials

    3.1. Create a .env file and create your environment variables:

    ```bash
    REACT_APP_CLIENT_ID=<Paste ClientID Here>
    REACT_APP_CLIENT_SECRET=<Paste Client Secret Here>
    ```

    3.2. Use your environment variables in the **`Initialization.js`** file.

    ![Initialization.js](/docs/assets/screenshot.png)

    **You can get your Uphold credentials *[here](https://uphold.com/en-us/get-started/developer)***

4. Run the application:

    ```bash
    npm start
    ```

5. If your browser doesn't open automatically, open it yourself and go to **`http://localhost:3000`**

---

### 💻 Usage

1. Enter the amount you want to convert in the input field.
2. Select the base currency from the dropdown menu.
3. View the equivalent amounts in other currencies below.

The currency rates are cached in the first request to avoid unnecessary requests to the API.

---

The design used in this project was inspired by **[Uphold](https://uphold.com/en-eu)** Brand Resources. You can check it out **[here](https://uphold.com/en-eu/brand-assets)**.

---

### 🏁 Results

![Result](https://img001.prntscr.com/file/img001/nCc9TdNSRRi10qT-b-ry_A.png)
