let count = 1;

setInterval(function()
{
    document.getElementById('radio' + count).checked = true;
    count++;

    if(count > 3)
    {
        count = 1;
    }
    
}, 3000)