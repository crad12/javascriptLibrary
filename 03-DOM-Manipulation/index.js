    // document.getElementById('testParagraph').style.color = 'blue';
    // console.log(document.getElementById('testParagraph').style.color);

    // document.getElementsByTagName('p');
    // document.getElementsByClassName('testClass');

    // document.querySelector('p.testClass'); // first instance //
    // document.querySelectorAll('p.testClass'); // all instances //
    console.log(document.querySelectorAll('p.sampleClass')[0].innerText = 'Hey Im Chad and im cool!');

    document.querySelectorAll('p.sampleClass')[0].innerHTML = '<span> I am a whole new HTML tag!</span>';

    
   
   
    // This one and below "mousedown, mouseup" is how you highlight button only while clicked // 
    
    document.getElementById('clickThisButton').addEventListener('mousedown', (details) => {
        details.target.style.backgroundColor = 'red';
        }
    );   
    
    document.getElementById('clickThisButton').addEventListener('mouseup', (details) => {
        details.target.style.backgroundColor = 'white';
        }
    );  // This one and above "mousedown, mouseup" is how you highlight button only while clicked //

    
    
    
    document.getElementById('clickThisButton').addEventListener('click', (details) => {
        details.target.style.backgroundColor = 'red';
        }
    );  // This makes the button red //

    
    
    
    
    document.getElementById('clickThisButton').addEventListener('click', () => {
        console.log('I was clicked');
        }
    );   // This reports it was clicked and counts the number of clicks //


    
    
    document.getElementById('nameInput').addEventListener('keyup',(event) => {
        console.log(event.target.value);
        console.log(document.getElementsByTagName('p'))
        
        
        
        //or use a "ifElse" statement//


    document.getElementById('nameInput').addEventListener('keyup',(event) => {
        if (event.target.value === '') {
            document.getElementsByTagName('p')[1].innerText = `No name has been entered`;
        } else {
            document.getElementsByTagName('p')[1].innerText = `Everyone please welcome ${event.target.value} to the screen!`
        }
    });
            

        // or //

        

    document.getElementsByTagName('p')[1].innerText = `Everyone please welcome ${event.target.value} to the screen!`;
    });   // This allows you to get info as its typped ot Inputed // Can do (event) or (event.key) or (event.target.value)
    //
