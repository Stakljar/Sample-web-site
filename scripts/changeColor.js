let loadOnce = false;
    function load(){
        document.getElementById('second-section').style.visibility = "visible";
        document.getElementById('second-section').style.animationDuration = "4s";
        document.getElementById('second-section').style.animationName = "changeColor";
        if(loadOnce === true){
            document.getElementById('third-section').style.visibility = "visible";
            document.getElementById('third-section').style.animationDuration = "4s";
            document.getElementById('third-section').style.animationName = "changeColor";
            document.getElementById('loader').style.visibility = "collapse";
        }
        loadOnce = true;
    }
