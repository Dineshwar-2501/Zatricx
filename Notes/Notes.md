

***FEATURES***

* ### Shortcuts

|------------------|---------------------------------------------------|

| Keybinding       | Purpose                                           |

|------------------|---------------------------------------------------|

| ALT + Z          | Accept line of suggestion (Copilot)               |

| ALT + X          | Multi-select all occurrences (Cursor)             |

| CTRL + Left      | To previous find match (Cursor)                   |

| CTRL + Right     | To after find match (Cursor)                      |

| ALT + D          | Copilot (AI)                                      |

| ALT + C          | ChatGPT (AI)                                      |

| Hold ALT         | Multi-select (Cursor)                             |

| CTRL + D         | Duplicate line/content next to it                 |

| CTRL + SPACE     | Suggestions (Types)                               |

| CTRL + SHIFT + M | Error Panel                                       |

| SHIFT + ALT + F  | Format the code                                   |

| CTRL + R         | Split Right                                       |

| CTRL + k + 0     | Collapse All                                      |

| ALT + T          | Open To-do List                                   |

| ALT + Q          | Quick Task                                        |

|------------------|---------------------------------------------------|




---
---
* ### Snippets

doc => '"document.quesryselector"'
reg => "Comment line region"
con => "console.log()"
fm  => "Frontend Reference mentor"

---
* ### Bootstrap Links



      \- \[Bootstrap 5.3.7 CSS (CDN)](https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/css/bootstrap.min.css)

      \- \[Bootstrap 5.3.7 JS Bundle (CDN)](https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.bundle.min.js)



      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-LN+7fdVzj6u52u30Kp6M/trliBMCMKTyK833zpbD+pXdCLuTusPj697FH4R/5mcr" crossorigin="anonymous">

      <link rel="stylesheet" href="./css/bootstrap.min.css">

      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.bundle.min.js" integrity="sha384-ndDqU0Gzau9qJ1lfW4pNLlhNTkCfHzAVBReH9diLvGRem5+R9g2FzA8ZGN954O5Q" crossorigin="anonymous"></script>

      <script src="./js/bootstrap.bundle.min.js"></script>


---
* ### Tailwindcss

        <link rel="stylesheet" href="../../styles/output.css">

CDN
<script src="https://cdn.tailwindcss.com"></script>

CLI
npm install tailwindcss @tailwindcss/cli
npx @tailwindcss/cli -i ./styles/input.css -o ./styles/output.css --watch

VITE/REACT
npm install tailwindcss @tailwindcss/vite
npm install -D @types/node
npx shadcn@latest init
npx shadcn-ui@latest add /component name/

AT : Vite.config
      
      import tailwindcss from "@tailwindcss/vite"
      plugins: [react(), tailwindcss()],
--components
AT : Vite.config
      import path from "path"
      import { fileURLToPath } from "url"
      import tailwindcss from "@tailwindcss/vite"

      import react from "@vitejs/plugin-react"
      import { defineConfig } from "vite"

      // ESM doesn't have __dirname, so recreate it
      const __filename = fileURLToPath(import.meta.url)
      const __dirname = path.dirname(__filename)

      export default defineConfig({
      plugins: [react(), tailwindcss()],
      resolve: {
      alias: {
            "@": path.resolve(__dirname, "./src"), // ✅ works now
      },
      },
      })

Create tscofig.json

            {
      "compilerOptions": {
      "baseUrl": ".",
      "paths": {
            "@/*": [
            "src/*"
            ]
      },
      "forceConsistentCasingInFileNames": true,
      "strict": true
      },
      "include": [
      "src"
      ]
      }

https://ui.shadcn.com/docs/installation/vite

https://ui.shadcn.com/docs/components            






---
* ### Custom photos



      https://picsum.photos/width/height


---
* ### Font Awesome



      <script src="https://kit.fontawesome.com/65424338d5.js" crossorigin="anonymous"></script>

      React

      npm i --save @fortawesome/react-fontawesome@latest

      npm i --save @fortawesome/fontawesome-svg-core

      npm i --save @fortawesome/free-solid-svg-icons
      npm i --save @fortawesome/free-regular-svg-icons
      npm i --save @fortawesome/free-brands-svg-icons
      ---
* ### Pattern

      Pattern:

      ^ : start of the string
      $ : end of the string
      eg: ^\[]+literal \[] +Jerusalem.ac.in
      (?=.\*\\d)  : for the input to contain at least one alphabet

      const stringPattern = /^[A-Za-z\s]+$/;

      const alphanumericPattern = /^[A-Za-z0-9]+$/;

      const numberPattern = /^[+-]?(?:\d+(\.\d*)?|\.\d+)$/;

      const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\[\]{}|;:'",.<>\/?]).{8,}$/;

      | Purpose                             | Regex Pattern                                  | Explanation                                                 |
      |-------------------------------------|------------------------------------------------|-------------------------------------------------------------|
      | Minimum 8 characters                | `/.{8,}/`                                      | Matches any string with at least 8 characters               |
      | Only digits                         | `/^\d+$/`                                      | Matches strings with only digits                            |
      | Only letters                        | `/^[A-Za-z]+$/`                                | Matches strings with only letters (no spaces/numbers)       |
      | At least one letter and one number  | `/^(?=.*[A-Za-z])(?=.*\d).+$/`                 | Requires at least one letter and one digit                  |
      | Must include special character      | `/^(?=.*[!@#$%^&*])/`                          | Checks for at least one special character                   |
      | Starts with a capital letter        | `/^[A-Z]/`                                     | First character must be uppercase                           |
      | Valid email format (basic)          | `/^\S+@\S+\.\S+$/`                             | Checks basic structure of an email                          |
      | Contains only lowercase letters     | `/^[a-z]+$/`                                   | All characters must be lowercase letters                    |
      | Contains only uppercase letters     | `/^[A-Z]+$/`                                   | All characters must be uppercase letters                    |
      | No whitespace allowed               | `/^\S+$/`                                      | String must not contain spaces or tabs                      |
      | Ends with a number                  | `/\d$/`                                        | Last character must be a digit                              |

---
* ### Excape Sequence


| ----------  | --------------------------------------------------------------------------------- |
|Escape       | Meaning                                                                           |

| ----------  | --------------------------------------------------------------------------------- |

| `\\\\n`       | Newline (line feed)                                                               |

| `\\\\r`       | Carriage return                                                                   |

| `\\\\t`       | Horizontal tab                                                                    |

| `\\\\b`       | Backspace                                                                         |

| `\\\\f`       | Form feed                                                                         |

| `\\\\v`       | Vertical tab (rarely used)                                                        |

| `\\\\0`       | Null character (only if not followed by a digit)                                  |

| `\\\\\\\\`      | Literal backslash `\\\\`                                                            |

| `\\\\'`       | Single quote (useful in single-quoted strings)                                    |

| `\\\\"`       | Double quote (useful in double-quoted strings)                                    |

| `\\\\uXXXX`   | Unicode code point, e.g. `\\\\u2764` → “❤”                                          |

| `\\\\u{H...}` | Unicode code point in braces, supports beyond 4 hex digits, e.g. `\\\\u{1F600}` → 😀 |

| `\\\\xHH`     | Latin-1 character by hex, e.g. `\\\\x41` → “A”                                      |

| ----------  | --------------------------------------------------------------------------------- |

---
* ### JavaScript Truthy / Falsy Cheat Sheet

      ### **Falsy values** (only 8 in total)
            These evaluate to `false` in a Boolean context:

            | Value          | Type      | Boolean(...) | Notes                                  |
            |----------------|-----------|--------------|----------------------------------------|
            | `false`        | boolean   | false        | literal false                          |
            | `0`            | number    | false        | includes `-0`                          |
            | `""`           | string    | false        | empty string                           |
            | `null`         | object    | false        | absence of value                       |
            | `undefined`    | undefined | false        | uninitialized variable                 |
            | `NaN`          | number    | false        | invalid number result                  |
            | `0n`           | bigint    | false        | bigint zero                            |
            | `document.all` | object    | false        | legacy browser quirk                   |

            ---

      ### **Truthy values**
            Everything else is truthy, for example:

            | Value          | Type      | Boolean(...) | Notes                                  |
            |----------------|-----------|--------------|----------------------------------------|
            | `"0"`          | string    | true         | non-empty string                       |
            | `" "`          | string    | true         | space is a character                   |
            | `[]`           | object    | true         | empty array                            |
            | `{}`           | object    | true         | empty object                           |
            | `Infinity`     | number    | true         | positive infinity                      |
            | `-Infinity`    | number    | true         | negative infinity                      |
            | `function(){}` | function  | true         | any function is truthy                 |






---
* ### JQuery Selectors



      ## 🔹 Basic Selectors
      - `$("#id")` → select element by **id**
      - `$(".class")` → select elements by **class**
      - `$("tag")` → select elements by **tag name** (`$("p")`, `$("div")`)
      - `$("selector1, selector2")` → multiple selectors (e.g. `$("p, .box")`)
      - `$("selector1 selector2")` → descendant (`$(".box p")`)
      - `$("selector1 > selector2")` → direct child (`$(".box > p")`)

      ---

      ## 🔹 Hierarchy Selectors
      - `$("ul li")` → all `<li>` inside `<ul>`
      - `$("ul > li")` → only **direct children** `<li>` of `<ul>`
      - `$("h1 + p")` → the first `<p>` immediately after `<h1>`
      - `$("h1 ~ p")` → all `<p>` after `<h1>` at the same level

      ---

      ## 🔹 Attribute Selectors
      - `$("[attr]")` → elements with attribute (`$("[href]")`)
      - `$("[attr='value']")` → specific value (`$("[type='text']")`)
      - `$("[attr!='value']")` → not equal
      - `$("[attr^='val']")` → starts with
      - `$("[attr$='val']")` → ends with
      - `$("[attr*='val']")` → contains

      ---

      ## 🔹 Filter Selectors
      - `:first` → first element (`$("p:first")`)
      - `:last` → last element (`$("p:last")`)
      - `:even` → even index (`$("tr:even")`)
      - `:odd` → odd index (`$("tr:odd")`)
      - `:eq(n)` → element at index n (`$("li:eq(2)")`)
      - `:gt(n)` → greater than index n (`$("li:gt(2)")`)
      - `:lt(n)` → less than index n (`$("li:lt(2)")`)
      - `:not(selector)` → exclude (`$("p:not(.intro)")`)

      ---

      ## 🔹 Form Selectors
      - `$(":input")` → all input, textarea, select, button
      - `$(":text")` → text inputs
      - `$(":password")` → password inputs
      - `$(":radio")`, `$(":checkbox")`, `$(":file")`
      - `$(":submit")`, `$(":reset")`, `$(":button")`
      - `$(":checked")` → all checked inputs
      - `$(":selected")` → selected `<option>`

      ---

      ## 🔹 Content Filters
      - `:contains("text")` → element with text (`$("p:contains('Hello')")`)
      - `:empty` → elements with no children or text
      - `:has(selector)` → element containing another element (`$("div:has(p)")`)
      - `:parent` → elements that are not empty

      ---

      ## 🔹 Visibility
      - `:visible` → visible elements
      - `:hidden` → hidden elements

      ---

      ✅ Use these with **methods** like `.text()`, `.html()`, `.css()`, `.val()`, etc.  
      Example:  

      ```js
      $("#title").text("Hello jQuery!");  // sets text
      $(".box:visible").css("border", "1px solid red"); // highlight visible boxes


![SPACE CHANGE](image.png)
* ### Translate

<!-- 🔹 Custom styled dropdown -->
                        <div class="ms-3 rounded-pill bg-primary" id="custom_translate_dropdown">
                            <a href="#" class="dropdown-toggle text-dark px-3 py-2 d-block" data-bs-toggle="dropdown">
                                <small><i class="fas fa-globe-europe text-light me-2"></i> English</small>
                            </a>

                            <div class="dropdown-menu rounded">
                                <a href="#" class="dropdown-item" data-lang="en">English</a>
                                <a href="#" class="dropdown-item" data-lang="bn">Bangla</a>
                                <a href="#" class="dropdown-item" data-lang="fr">French</a>
                                <a href="#" class="dropdown-item" data-lang="es">Spanish</a>
                                <a href="#" class="dropdown-item" data-lang="ar">Arabic</a>
                            </div>
                        </div>

                        <!-- 🔹 Hidden Google Translate element -->
                        <div id="google_translate_element" style="display:none;"></div>
<script>
  function googleTranslateElementInit() {
    new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
  }

  document.addEventListener("DOMContentLoaded", () => {
    const menu = document.getElementById("custom_translate_dropdown");

    menu.addEventListener("click", function(e) {
      if (e.target.classList.contains("dropdown-item")) {
        e.preventDefault();
        const lang = e.target.getAttribute("data-lang");

        // update <html lang="">
        document.documentElement.setAttribute("lang", lang);

        // switch Google Translate
        const select = document.querySelector(".goog-te-combo");
        if (select) {
          select.value = lang;
          select.dispatchEvent(new Event("change"));
        }
      }
    });
  });
</script>

<script 
src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit">

</script>
* ### BrowserRouters



      ## **1️⃣ Visual Hierarchy Example**

      ```jsx
      <UserBackpack.Provider value={{apidata,getApiData,favourite,getFavourite}}>
      <BrowserRouter>
      <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
      </Routes>
      </BrowserRouter>
      <MovieCard />
      </UserBackpack.Provider>
      ```

      ```
      UserBackpack.Provider
      │
      ├─ BrowserRouter
      │   └─ Routes
      │       ├─ Home  <-- has access to UserBackpack context
      │       └─ About <-- has access to UserBackpack context
      │
      └─ MovieCard <-- also has access to UserBackpack context
      ```

      ✅ Everything **inside the Provider** can use the context.

      ---

      ## **2️⃣ Rules / Cheat Sheet**

      | Concept                  | Definition / Behavior                                                                                     |
      | ------------------------ | --------------------------------------------------------------------------------------------------------- |
      | **Context Provider**     | Wraps components to give them access to shared state/data. Only children inside it can access it.         |
      | **useContext**           | Hook to consume the context in a component. Must be called in a component **inside** the provider.        |
      | **BrowserRouter**        | Enables routing. Doesn’t affect context. Any context **above it** is available to all routed components.  |
      | **Routes / Route**       | Components rendered via `Route` are children of `BrowserRouter`, and also children of any provider above. |
      | **Provider inside Page** | Use if you want the context **only for that page**, not globally.                                         |
      | **Provider at top**      | Use if context/state is shared **across multiple pages/components**.                                      |

      ---

      ### **3️⃣ Quick Rules of Thumb**

      1. **Top-level provider** → global state (all pages can use it).
      2. **Inside a page** → page-specific state only.
      3. **BrowserRouter position** → doesn’t block context. Just make sure provider wraps it if you want routes to access context.
      4. **Component outside provider** → **cannot** use context (will return `undefined`).

      ---

      💡 **Analogy:**

      * **Provider** = Wi-Fi router.
      * **Children components** = devices.
      * Devices under the router can access Wi-Fi. Devices outside cannot.
      * Router placement = top of the house → whole house has Wi-Fi. Router in a single room → only that room has Wi-Fi.

      ---

      If you want, I can also make a **mini “cheat sheet diagram”** showing **Provider + Router + multiple pages** in one glance — super visual for your projects.

      Do you want me to do that?
* ### Notes
      
       ### RANGE
            <div>
                  <label for="volume">volume :</label>
                  <span id="val">50%</span>
                  <input type="range" id="volume" name="volume" min="0" max="100" oninput="document.getElementById('val').innerText=this.value + '%'" value="50" step="1" title="Set the volume">
            </div>
* ### Color System

      ### Light Mode
                  Element	Color
                  Background	#ffffff
                  Text	      #0f172a
                  Card	      #f8fafc
                  Border	#e5e7eb
                  Button	#2563eb
                  Button Text	#ffffff
      ### Dark Mode
                  Element	Color
                  Background	#0b0f19
                  Text	      #e5e7eb
                  Card	      #111827
                  Border	#1f2937
                  Button	#60a5fa
                  Button Text	#020617
* ### Paralax
      npm i tailwindcss @tailwindcss/vite parallax-js three
* ### Vanta-wave
      npm i tailwindcss @tailwindcss/vite vanta three 
* ### SERVER

      npm i express cors