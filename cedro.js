function isChecked()
{
	if (document.getElementById("LiCheck").checked)
		return true;
	else
		return false;	
}

function termo() 
{
	var show = document.getElementById("aparece");
	show.classList.add("active"); 
}

function ValidarTermo()
{
	var Verificado = isChecked();

	if (!Verificado)
	{
		alert ("Para prosseguir, será necessário aceitar o termo");
	} 
	else 
	{

		window.location.href="questionario.html";
	}
}
