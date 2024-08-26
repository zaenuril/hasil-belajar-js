    const btn1 = document.getElementById('btn1');
    const btn = document.querySelector('button');
    const body = document.body;
    
    const defaultText = 'klik aku';
    btn1.textContent = defaultText;

    let newText = document.createElement('p'); // create element p
    newText = 'halo nama saya sherina '; // its my name :>
    // newText.textContent = newText; // idk why i wrote this

    btn1.style.backgroundColor = 'skyblue';
    btn1.style.border = 'none';
    btn1.style.color = 'red';
    btn1.style.padding = '10px';

    function gantiWarna() {
        btn1.style.backgroundColor = 'grey';
        btn1.textContent = defaultText;
    }
    
    function gantiText(){
        body.append(newText); // sppend the newText to body
        body.style.color = 'black'; // base color text
    }
    
    function kembaliText() {
        body.style.color = '#FF7EE2'; // color chang to pink if mouse out
        btn1.style.backgroundColor = 'skyblue'; // background change to default when mouse leave 
    }