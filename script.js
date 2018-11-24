var workers = [];

function countSalary(wyears, education)
{
    var baseSalary = 500;
    var raise =  baseSalary * 0.1 * wyears;
    var mainSalary = baseSalary + raise;
    var coificient = educationCoificient(education);
    return mainSalary * coificient;
}

function educationCoificient(education)
{
    switch(education)
    {
        case 'faculty': return 1.2;
        case 'college': return 1.1;
        default: return 1;
    }
}

function isValid(firstName, sureName, wyears)
{
    if(firstName.length == 0 || sureName.length == 0 || wyears.length == 0 || wyears < 0)
    {
        return false;
    }
        return true;
}

function addWorker()
{
    var firstName = document.getElementById('firstName').value;
    var sureName = document.getElementById('sureName').value;
    var swyears = document.getElementById('wyears').value;
    if (!isValid(firstName, sureName, swyears))
    {
        alert(`worker ${name} is not added, because input is wrong`);
        return;
    }
    var name = sureName +  ' ' + firstName;
    var wyears = parseInt(document.getElementById('wyears').value);
    var education = document.getElementById('education').value;
    var salary = countSalary(wyears, education);



    workers.push({name: name, wyears: wyears, education: education, salary: salary });

    alert(`Worker ${firstName} ${sureName} has been added`);

}

function showWorkers()
{
    var tableHtml = '<table class="table table-striped table-hover table-dark"><tr><th>Ime</th><th>Plata</th></tr>';
    workers.sort(function(w1, w2){return w2.salary - w1.salary});
    for (var i = 0 ; i < workers.length; i++)
    {
        tableHtml += '<tr class="table-Active"><td>' + workers[i].name + '</td> <td>' + workers[i].salary + '</td> </tr>';
    }
    tableHtml += '</table>';
    document.getElementById('workers').innerHTML = tableHtml;
}
