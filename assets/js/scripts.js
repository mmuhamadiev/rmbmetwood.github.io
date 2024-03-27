
        //Language to update content based on selected language
        function updateContent(langData, lang) {
                    document.querySelectorAll('[data-i18n]').forEach(element => {
                        const key = element.getAttribute('data-i18n');
                        element.textContent = langData[key];
        });
        // Get the image element by its ID
        var imageElement = document.getElementById('languageImage');
            
        // Set the source according to the selected language
        if (lang === 'ru') {
            imageElement.src = 'assets/images/commercial-banner/circle_wrap.png';
        } else if (lang === 'uz') {
            imageElement.src = 'assets/images/commercial-banner/circle_wrap_uz.png';
        } else if (lang === 'en') {
            imageElement.src = 'assets/images/commercial-banner/circle_wrap_en.png';
        } else {
            imageElement.src = 'assets/images/commercial-banner/circle_wrap.png';
        }
        }

        // Function to fetch language data
        async function fetchLanguageData(lang) {
            const response = await fetch(`assets/languages/${lang}.json`);
            return response.json();
        }

        // Function to change language
        async function changeLanguage(lang) {
            await setLanguagePreference(lang);
            
            const langData = await fetchLanguageData(lang);
           
            updateContent(langData, lang);
          
        }

        // Function to set the language preference
        function setLanguagePreference(lang) {
            localStorage.setItem('language', lang);
            location.reload();
        }

          // Call updateContent() on page load
  window.addEventListener('DOMContentLoaded', async () => {
    const userPreferredLanguage = localStorage.getItem('language') || 'ru';
    const langData = await fetchLanguageData(userPreferredLanguage);
    updateContent(langData, userPreferredLanguage);
  
  });