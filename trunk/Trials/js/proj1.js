//This js file is meant for proj1
patchSize= 256;
zoomlevel= 0;
imageSize= Math.pow(2, zoomlevel)*patchSize;

function change()
{ 
	document.getElementById("VW").style.height=document.getElementById("text1").value + "px";
	document.getElementById("VW").style.width=document.getElementById("text2").value + "px";
}

function gridFormation()
{
	for (j=1;j<=16;j++)
	{
		i=document.createElement("img");
		i.height=patchSize/2;
		i.width=patchSize/2;
		document.getElementById("patchGrid").appendChild(i);
	}
}