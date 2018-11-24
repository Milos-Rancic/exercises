var indexSlike = 1;

function prethodna()
{
    if(indexSlike == 1)
    {
        indexSlike = 6;
    } 
    else
    {
        indexSlike -- ;
    }
    document.getElementById('dog').src = 'images/dog' + indexSlike + '.jfif';
}

function sledeca()
{
    if(indexSlike == 6)
    {
        indexSlike = 1;
    } 
    else
    {
        indexSlike ++ ;
    }
    document.getElementById('dog').src = 'images/dog' + indexSlike + '.jfif';
}