document.addEventListener('DOMContentLoaded', () => {
    const calculateBtn = document.getElementById('calculate-btn');
    const resultDiv = document.getElementById('result');
    const name1Input = document.getElementById('name1');
    const dob1Input = document.getElementById('dob1');
    const name2Input = document.getElementById('name2');
    const dob2Input = document.getElementById('dob2');
    const resultTitle = document.getElementById('result-title');
    const resultText = document.getElementById('result-text');

    // Función para obtener el signo zodiacal a partir de una fecha
    function getZodiacSign(day, month) {
        if ((month == 1 && day >= 20) || (month == 2 && day <= 18)) return "Acuario";
        if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) return "Piscis";
        if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) return "Aries";
        if ((month == 4 && day >= 20) || (month == 5 && day <= 20)) return "Tauro";
        if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) return "Géminis";
        if ((month == 6 && day >= 21) || (month == 7 && day <= 22)) return "Cáncer";
        if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) return "Leo";
        if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) return "Virgo";
        if ((month == 9 && day >= 23) || (month == 10 && day <= 22)) return "Libra";
        if ((month == 10 && day >= 23) || (month == 11 && day <= 21)) return "Escorpio";
        if ((month == 11 && day >= 22) || (month == 12 && day <= 21)) return "Sagitario";
        if ((month == 12 && day >= 22) || (month == 1 && day <= 19)) return "Capricornio";
    }

    // Textos de compatibilidad (versión muy simplificada)
    const compatibilityTexts = {
        "Aries": {
            "Leo": "¡Fuego con fuego! Una pareja llena de pasión, aventura y dinamismo. Ambos son líderes natos, lo que puede llevar a choques de ego, pero su energía compartida crea un vínculo poderoso y emocionante.",
            "Libra": "Los opuestos se atraen. La audacia de Aries se equilibra con la diplomacia y el encanto de Libra. Si logran armonizar sus diferencias, pueden aprender mucho el uno del otro y formar una pareja muy completa."
        },
        "Tauro": {
            "Virgo": "Tierra con tierra. Una combinación estable, práctica y sensual. Ambos valoran la seguridad, la lealtad y los placeres simples de la vida. Construyen una relación sólida y duradera basada en la confianza mutua.",
            "Cáncer": "Una unión muy nutritiva. La sensibilidad de Cáncer encuentra un puerto seguro en la estabilidad de Tauro. Juntos crean un hogar cálido y un vínculo emocional profundo y protector."
        },
        "Leo": {
            "Sagitario": "¡La pareja aventurera! Ambos son signos de fuego, optimistas y amantes de la vida. Comparten un gran entusiasmo, generosidad y ganas de explorar el mundo. La diversión está garantizada."
        },
        // Añade más combinaciones si quieres
    };

    calculateBtn.addEventListener('click', () => {
        const name1 = name1Input.value || "Persona 1";
        const dob1 = new Date(dob1Input.value);
        const name2 = name2Input.value || "Persona 2";
        const dob2 = new Date(dob2Input.value);

        if (!dob1Input.value || !dob2Input.value) {
            alert("Por favor, ingresa ambas fechas de nacimiento.");
            return;
        }

        const day1 = dob1.getUTCDate();
        const month1 = dob1.getUTCMonth() + 1;
        const sign1 = getZodiacSign(day1, month1);

        const day2 = dob2.getUTCDate();
        const month2 = dob2.getUTCMonth() + 1;
        const sign2 = getZodiacSign(day2, month2);

        resultTitle.textContent = `Análisis: ${name1} (${sign1}) y ${name2} (${sign2})`;
        
        let analysisText = (compatibilityTexts[sign1] && compatibilityTexts[sign1][sign2]) || 
                           (compatibilityTexts[sign2] && compatibilityTexts[sign2][sign1]);
        
        if (!analysisText) {
            analysisText = `La combinación de ${sign1} y ${sign2} es única. Cada pareja escribe su propia historia más allá de los arquetipos. La clave siempre está en la comunicación, el respeto y el cariño para superar cualquier desafío y potenciar las alegrías.`;
        }
        
        resultText.textContent = analysisText;
        resultDiv.classList.remove('hidden');
    });
});
