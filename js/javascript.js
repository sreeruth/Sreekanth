/**
 * @author Satish
 */
var x;
var hour1 ,paycode1 , workorder1,account1 , function1;
var hour2 ,paycode2 , workorder2,account2 , function2;
var hour3 ,paycode3 , workorder3,account3 , function3;
var hour4 ,paycode4 , workorder4,account4 , function4;
var hour5 ,paycode5 , workorder5,account5 , function5;
var hour6 ,paycode6 , workorder6,account6 , function6;



var vhours11,vhours12,vhours13,vhours14,vhours15,vhours16;
var vhours21,vhours22,vhours23,vhours24,vhours25,vhours26;
var vhours31,vhours32,vhours33,vhours34,vhours35,vhours36;

var vech1,vech2,vech3;

var gv_employeeid,gv_employeename,gv_workdate,gv_starttime,gv_endtime,gv_mstarttime,gv_mendtime;




$(document).ready(function() {
       
	 /*  //accept only numbers
$('input.numberinput').bind('keypress', function (e) {
        return !(e.which != 8 && e.which != 0 &&
                (e.which < 48 || e.which > 57) && e.which != 46);
    });
	
	
	*/
	
	
					  
	$(document).delegate('#index.html', 'pagebeforechange', function() {


gv_employeeid  = document.getElementById('empid').value;
gv_employeename = document.getElementById('empname').value;
gv_workdate  = document.getElementById('workdate').value;
gv_starttime = document.getElementById('starttime').value;
gv_endtime   = document.getElementById('endtime').value;
gv_mstarttime = document.getElementById('mealstarttime').value;
gv_mendtime   = document.getElementById('mealendtime').value;


$('#empid').val(gv_employeeid);
$('#empname').val(gv_employeename);
$('#workdate').val(gv_workdate);
$('#starttime').val(gv_starttime);
$('#endtime').val(gv_endtime);
$('#mealstarttime').val(gv_mstarttime);
$('#mealendtime').val(gv_mendtime);

localStorage.setItem("lempid",$('#empid').val());
localStorage.setItem("lempname",$('#empname').val());
localStorage.setItem("lworkdate",$('#workdate').val());
localStorage.setItem("lstarttime",$('#starttime').val());
localStorage.setItem("lendtime",$('#endtime').val());
localStorage.setItem("lmealstarttime",$('#mealstarttime').val());
localStorage.setItem("lmealendtime",$('#mealendtime').val());

$('#empid').html(localStorage.getItem("lempid"));
$('#empname').html(localStorage.getItem("lempname"));
$('#workdate').html(localStorage.getItem("lworkdate"));
$('#starttime').html(localStorage.getItem("lstarttime"));
$('#endtime').html(localStorage.getItem("lendtime"));
$('#mealstarttime').html(localStorage.getItem("lmealstarttime"));
$('#mealendtime').html(localStorage.getItem("lmealendtime"));					   

		
		
		
		



});				   
					   

					   
					   



	

	
$('#save1').click(function() {


hour1 = document.getElementById('hour1').value;
paycode1 = document.getElementById('paycode1').value;
workorder1 = document.getElementById('workorder1').value;
account1 = document.getElementById('account1').value;
function1 = document.getElementById('function1').value;

hour2 = document.getElementById('hour2').value;
paycode2 = document.getElementById('paycode2').value;
workorder2 = document.getElementById('workorder2').value;
account2 = document.getElementById('account2').value;
function2 = document.getElementById('function2').value;

hour3 = document.getElementById('hour3').value;
paycode3 = document.getElementById('paycode3').value;
workorder3 = document.getElementById('workorder3').value;
account3 = document.getElementById('account3').value;
function3 = document.getElementById('function3').value;

hour4 = document.getElementById('hour4').value;
paycode4 = document.getElementById('paycode4').value;
workorder4 = document.getElementById('workorder4').value;
account4 = document.getElementById('account4').value;
function4 = document.getElementById('function4').value;

hour5 = document.getElementById('hour5').value;
paycode5 = document.getElementById('paycode5').value;
workorder5 = document.getElementById('workorder5').value;
account5 = document.getElementById('account5').value;
function5 = document.getElementById('function5').value;

hour6 = document.getElementById('hour6').value;
paycode6 = document.getElementById('paycode6').value;
workorder6 = document.getElementById('workorder6').value;
account6 = document.getElementById('account6').value;
function6 = document.getElementById('function6').value;


localStorage.setItem("lhour1",$('#hour1').val());
localStorage.setItem("lpaycode1",$('#paycode1').val());
localStorage.setItem("lworkorder1",$('#workorder1').val());
localStorage.setItem("laccount1",$('#account1').val());
localStorage.setItem("lfunction1",$('#function1').val());


localStorage.setItem("lhour2",$('#hour2').val());
localStorage.setItem("lpaycode2",$('#paycode2').val());
localStorage.setItem("lworkorder2",$('#workorder2').val());
localStorage.setItem("laccount2",$('#account2').val());
localStorage.setItem("lfunction2",$('#function2').val());


localStorage.setItem("lhour3",$('#hour3').val());
localStorage.setItem("lpaycode3",$('#paycode3').val());
localStorage.setItem("lworkorder3",$('#workorder3').val());
localStorage.setItem("laccount3",$('#account3').val());
localStorage.setItem("lfunction3",$('#function3').val());


localStorage.setItem("lhour4",$('#hour4').val());
localStorage.setItem("lpaycode4",$('#paycode4').val());
localStorage.setItem("lworkorder4",$('#workorder4').val());
localStorage.setItem("laccount4",$('#account4').val());
localStorage.setItem("lfunction4",$('#function4').val());

localStorage.setItem("lhour5",$('#hour5').val());
localStorage.setItem("lpaycode5",$('#paycode5').val());
localStorage.setItem("lworkorder5",$('#workorder5').val());
localStorage.setItem("laccount5",$('#account5').val());
localStorage.setItem("lfunction5",$('#function5').val());


localStorage.setItem("lhour6",$('#hour6').val());
localStorage.setItem("lpaycode6",$('#paycode6').val());
localStorage.setItem("lworkorder6",$('#workorder6').val());
localStorage.setItem("laccount6",$('#account6').val());
localStorage.setItem("lfunction6",$('#function6').val());




//$.mobile.changePage('home.html', { reloadPage : true, changeHash : true });




        




window.open ('index.html','_self',false)



/*

x= hour1;

$('#td11').val(x);
$('#hours1').val(x);
$('#vid2').val(x);
var y = $('#vid2').val();
/*document.getElementById("td11").value= x;
document.getElementById("hours1").value= x;
document.getElementById("vid2").value= x;
*/
//document.getElementById("td11").setAttribute('data-value', 122);



//alert(y);
});



$('#save2').click(function() {




vech1  = document.getElementById('vid1').value;
vech2  = document.getElementById('vid2').value;
vech3  = document.getElementById('vid3').value;


vhours11  = document.getElementById('v11').value;
vhours12  = document.getElementById('v12').value;
bhours13  = document.getElementById('v13').value;
vhours14  = document.getElementById('v14').value;
vhours15  = document.getElementById('v15').value;
vhours16  = document.getElementById('v16').value;
vhours21  = document.getElementById('v21').value;
vhours22  = document.getElementById('v22').value;
vhours23  = document.getElementById('v33').value;
vhours24  = document.getElementById('v24').value;
vhours25  = document.getElementById('v25').value;
vhours26  = document.getElementById('v26').value;
vhours31  = document.getElementById('v31').value;
vhours32  = document.getElementById('v32').value;
vhours33  = document.getElementById('v33').value;
vhours34  = document.getElementById('v34').value;
vhours35  = document.getElementById('v35').value;
vhours36  = document.getElementById('v36').value;








localStorage.setItem("lvhours11",$('#v11').val());
localStorage.setItem("lvhours12",$('#v12').val());
localStorage.setItem("lvhours13",$('#v13').val());
localStorage.setItem("lvhours14",$('#v14').val());
localStorage.setItem("lvhours15",$('#v15').val());
localStorage.setItem("lvhours16",$('#v16').val());
localStorage.setItem("lvhours21",$('#v21').val());
localStorage.setItem("lvhours22",$('#v22').val());
localStorage.setItem("lvhours23",$('#v23').val());
localStorage.setItem("lvhours24",$('#v24').val());
localStorage.setItem("lvhours25",$('#v25').val());
localStorage.setItem("lvhours26",$('#v26').val());
localStorage.setItem("lvhours31",$('#v31').val());
localStorage.setItem("lvhours32",$('#v32').val());
localStorage.setItem("lvhours33",$('#v33').val());
localStorage.setItem("lvhours34",$('#v34').val());
localStorage.setItem("lvhours35",$('#v35').val());
localStorage.setItem("lvhours36",$('#v36').val());






//$.mobile.changePage('home.html', { reloadPage : true, changeHash : true });




        




window.open ('index.html','_self',false)



});




$('#tableid2 tr:nth-child(2) td:nth-child(2)').html(localStorage.getItem("lvhours11"));
$('#tableid2 tr:nth-child(2) td:nth-child(3)').html(localStorage.getItem("lvhours21"));
$('#tableid2 tr:nth-child(2) td:nth-child(4)').html(localStorage.getItem("lvhours31"));

		





$('#tableid2 tr:nth-child(3) td:nth-child(2)').html(localStorage.getItem("lvhours12"));
$('#tableid2 tr:nth-child(3) td:nth-child(3)').html(localStorage.getItem("lvhours22"));
$('#tableid2 tr:nth-child(3) td:nth-child(4)').html(localStorage.getItem("lvhours32"));





$('#tableid2 tr:nth-child(4) td:nth-child(2)').html(localStorage.getItem("lvhours13"));
$('#tableid2 tr:nth-child(4) td:nth-child(3)').html(localStorage.getItem("lvhours23"));
$('#tableid2 tr:nth-child(4) td:nth-child(4)').html(localStorage.getItem("lvhours33"));





$('#tableid2 tr:nth-child(5) td:nth-child(2)').html(localStorage.getItem("lvhours14"));
$('#tableid2 tr:nth-child(5) td:nth-child(3)').html(localStorage.getItem("lvhours24"));
$('#tableid2 tr:nth-child(5) td:nth-child(4)').html(localStorage.getItem("lvhours34"));






$('#tableid2 tr:nth-child(6) td:nth-child(2)').html(localStorage.getItem("lvhours15"));
$('#tableid2 tr:nth-child(6) td:nth-child(3)').html(localStorage.getItem("lvhours25"));
$('#tableid2 tr:nth-child(6) td:nth-child(4)').html(localStorage.getItem("lvhours35"));


6
{

$('#tableid2 tr:nth-child(7) td:nth-child(2)').html(localStorage.getItem("lvhours16"));
$('#tableid2 tr:nth-child(7) td:nth-child(3)').html(localStorage.getItem("lvhours26"));
$('#tableid2 tr:nth-child(7) td:nth-child(4)').html(localStorage.getItem("lvhours36"));

}









$('#tableId tr:nth-child(2) td:nth-child(1)').html(localStorage.getItem("lpaycode1"));
$('#tableId tr:nth-child(2) td:nth-child(2)').html(localStorage.getItem("lhour1"));
$('#tableId tr:nth-child(2) td:nth-child(3)').html(localStorage.getItem("lworkorder1"));
$('#tableId tr:nth-child(2) td:nth-child(4)').html(localStorage.getItem("laccount1"));
$('#tableId tr:nth-child(2) td:nth-child(5)').html(localStorage.getItem("lfunction1"));


$('#tableId tr:nth-child(3) td:nth-child(1)').html(localStorage.getItem("lpaycode2"));
$('#tableId tr:nth-child(3) td:nth-child(2)').html(localStorage.getItem("lhour2"));
$('#tableId tr:nth-child(3) td:nth-child(3)').html(localStorage.getItem("lworkorder2"));
$('#tableId tr:nth-child(3) td:nth-child(4)').html(localStorage.getItem("laccount2"));
$('#tableId tr:nth-child(3) td:nth-child(5)').html(localStorage.getItem("lfunction2"));


$('#tableId tr:nth-child(4) td:nth-child(1)').html(localStorage.getItem("lpaycode3"));
$('#tableId tr:nth-child(4) td:nth-child(2)').html(localStorage.getItem("lhour3"));
$('#tableId tr:nth-child(4) td:nth-child(3)').html(localStorage.getItem("lworkorder3"));
$('#tableId tr:nth-child(4) td:nth-child(4)').html(localStorage.getItem("laccount3"));
$('#tableId tr:nth-child(4) td:nth-child(5)').html(localStorage.getItem("lfunction3"));


$('#tableId tr:nth-child(5) td:nth-child(1)').html(localStorage.getItem("lpaycode4"));
$('#tableId tr:nth-child(5) td:nth-child(2)').html(localStorage.getItem("lhour4"));
$('#tableId tr:nth-child(5) td:nth-child(3)').html(localStorage.getItem("lworkorder4"));
$('#tableId tr:nth-child(5) td:nth-child(4)').html(localStorage.getItem("laccount4"));
$('#tableId tr:nth-child(5) td:nth-child(5)').html(localStorage.getItem("lfunction4"));


$('#tableId tr:nth-child(6) td:nth-child(1)').html(localStorage.getItem("lpaycode5"));
$('#tableId tr:nth-child(6) td:nth-child(2)').html(localStorage.getItem("lhour5"));
$('#tableId tr:nth-child(6) td:nth-child(3)').html(localStorage.getItem("lworkorder5"));
$('#tableId tr:nth-child(6) td:nth-child(4)').html(localStorage.getItem("laccount5"));
$('#tableId tr:nth-child(6) td:nth-child(5)').html(localStorage.getItem("lfunction5"));

$('#tableId tr:nth-child(7) td:nth-child(1)').html(localStorage.getItem("lpaycode6"));
$('#tableId tr:nth-child(7) td:nth-child(2)').html(localStorage.getItem("lhour6"));
$('#tableId tr:nth-child(7) td:nth-child(3)').html(localStorage.getItem("lworkorder6"));
$('#tableId tr:nth-child(7) td:nth-child(4)').html(localStorage.getItem("laccount6"));
$('#tableId tr:nth-child(7) td:nth-child(5)').html(localStorage.getItem("lfunction6"));



//window.localStorage.clear();

});
	
	
	
