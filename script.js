let feet;
        let compute=0;
        let yard = 0.333;
        function computeValue(){

            feet = parseInt(document.getElementById("feets").value);
            
                
            compute = feet * yard;
            document.getElementById("output").value = compute;
            
        }
        document.getElementById("bntcompute").addEventListener("click", computeValue);