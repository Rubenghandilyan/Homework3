const mean=function(a,b,c)
{
	const d=(a+b+c)/3;
	return d;
}
//console.log(mean(5,2,7));
const a=function()
{
	return 2;	
}
//console.log(a());
const b=function(num1,num2)
{
	const num3=num1+num2;
	console.log(numn3);
}
const fullName=function(firstName,lastName)
{
	const name=firstName+" "+lastName;
	return name;
}
//console.log(fullName("Yaya","Toure"));
const string=function(str1,str2,str3)
{
	if(str1.length>str2.length)
	{
		if(str1.length>str3.length)
		{
			return str1;
		}
		else
		{
			return str3;
		}
	}
	else if(str1.length>str3.length)
	{
		if(str1.length>str2.length)
		{
			return str1;
		}
		else
		{
			return str2;
		}
	}
	else if(str2.length>str3.length)
	{
		if(str2.length>str3.length)
		{
			return str2;
		}
		else
		{
			return str3;
		}
	}
}
//console.log(string("Yayaaaa","Toure","Kolooooooooooo"))
const compare=function(num1,num2)
{
	if(num1===num2)
		return 0;
	else if(num1>num2)
		return 1;
	else
		return -1;
}
//console.log(compare(5,8));
const truetly=function(a,b,c)
{
	return a||b||c;
} 
