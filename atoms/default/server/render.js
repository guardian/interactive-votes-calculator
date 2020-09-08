import mainHTML from "./atoms/default/server/templates/main.html!text"

export async function render() {
    return `
    
    <div class='candidate' id='biden'>
        <h2>Biden</h2>
        <h3 class='candidate-ecv'></h3>
    </div>
    <div class='candidate' id='trump'>
        <h2>Trump</h2>
        <h3 class='candidate-ecv'></h3>
    </div>

    <div class='cards-wrapper'></div>
    `;
} 