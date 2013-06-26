/**
 * @author Satish
 */

var gv_username, gv_password;
var session;
var COMPANY_CODE;

var GV_XML, gv_order, status, GV_Orders_XML, code, codetxt;

var Ls_Ord_List = [];



	//$(document).delegate('#leakrepairorder', 'pagebeforeshow', function() {
	//refresh_leakrepairorder_page();
//});	


$(document).ready(function() {
       
	   //Login
                  
                  $(function() 
				  {
						setTimeout(hideSplash, 1000);
                  });
                  
                  
                  
                  
				  function hideSplash() 
				  {
					$.mobile.changePage("#loginform", "fade");
                  }
				  
				  $('#pan').click(function()
				  {
					$('#menuPanel').panel("open");
				  });
				  
				  
				
                  
                  
                  
                               
		$("#login").click(function() 
		{
			
			
			Login();
			if (status=='S') 
               {
                    
                    $.mobile.changePage("#orders", "fade");
                    Build_Orders();
                    
               }
            else

            	$("#error").append('<p data-theme="e" data-icon="alert"><strong>Invalid ID or password.</strong><p>');
            
			});
                  
                  
                 
                  

	
	
	
	
	    $('#Save1').click(function()
				  {
					Update();
				  });
	
	
	
		$('#orders').delegate('li', 'click', function() {
		
		//$('#LeakRepair').listview('refresh');
		//$('#LeakRepair').html(data);
		       

        
		
		var orderNo = $(this).text();
		
		gv_order = orderNo;
		orderNo = orderNo.replace(/\s+/g, '');
		
		$.mobile.changePage("#leakrepairorder", "fade");
						
					var myXML1 = localStorage.getItem(orderNo);
					
					GV_XML = myXML1;
										$('#list').empty();
					var LEAK_CODE1 = $(myXML1).find("LEAK_CODE").text();
					var FACILITYKIND = $(myXML1).find("FACILITY_KIND").text();
					var LEAKAT = $(myXML1).find("LEAK_AT").text();
 					var HOWDETECTED = $(myXML1).find("HOW_DETECTED").text();
					var PPM  = $(myXML1).find("PPM").text();
var GAS_PERCENTAGE = $(myXML1).find("GAS_PERCENTAGE").text();
var SPREAD = $(myXML1).find("SPREAD").text();
var VEG_DAMAGE = $(myXML1).find("VEG_DAMAGE").text();
var PROXIMITY_TO_BLD = $(myXML1).find("PROXIMITY_TO_BLD").text();
var PAVING_CODE = $(myXML1).find("PAVING_CODE").text();
    COMPANY_CODE = $(myXML1).find("COMPANY_CODE").text();
var LEAK_CODE = $(myXML1).find("LEAK_CODE").text();
var DETECT_DATE = $(myXML1).find("DETECT_DATE").text();
var TYPE_REPAIR = $(myXML1).find("TYPE_REPAIR").text();
var MATERIAL = $(myXML1).find("MATERIAL").text();
var LEAK_IN = $(myXML1).find("LEAK_IN").text();
var CAUSE = $(myXML1).find("CAUSE").text();
var YEAR_INSTALLED = $(myXML1).find("YEAR_INSTALLED").text();
var SOIL_TYPE = $(myXML1).find("SOIL_TYPE").text();
var PIPE_SIZE = $(myXML1).find("PIPE_SIZE").text();
var PAVING_CODE = $(myXML1).find("PAVING_CODE").text();
var LEAK_VERI_RESULT = $(myXML1).find("LEAK_VERI_RESULT").text();
/*
					$('#leakcode').val($(myXML1).find("LEAK_CODE").text());
					$('#detecteddate').val($(myXML1).find("DETECT_DATE").text());
					$('#facility').val($(myXML1).find("FACILITY_KIND").text());
                    $('#leakat').val($(myXML1).find("LEAK_AT").text());
                    $('#howdetected').val($(myXML1).find("HOW_DETECTED").text());
					$('#ppm').val($(myXML1).find("PPM").text());
					$('#gas').val($(myXML1).find("GAS_PERCENTAGE").text());
					$('#spread').val($(myXML1).find("SPREAD").text());
					$('#vegdamage').val($(myXML1).find("VEG_DAMAGE").text());
					$('#ptobuild').val($(myXML1).find("PROXIMITY_TO_BLD").text());
					$('#pavingcode').val($(myXML1).find("PAVING_CODE").text());
				    //$('#Leakver').val($(myXML1).find("LEAK_VERI_RESULT").text());
					$('#Street').val($(myXML1).find("STREET").text());
					$('#city').val($(myXML1).find("CITY").text());
                    //$('#Typeofrepair').val($(myXML1).find("TYPE_REPAIR").text());
			      $('#Material').val($(myXML1).find("MATERIAL").text());
					$('#Leakin').val($(myXML1).find("LEAK_IN").text());
					$('#Cause').val($(myXML1).find("CAUSE").text());
					$('#year').val($(myXML1).find("YEAR_INSTALLED").text());
					$('#Soiltype').val($(myXML1).find("SOIL_TYPE").text());
					$('#PipeSize').val($(myXML1).find("PIPE_SIZE").text());   */

					$('#Street').val($(myXML1).find("STREET").text());
					$('#city').val($(myXML1).find("CITY").text());
					
$("#list").append('<li> <b>Leak Code</b> :      ' + LEAK_CODE.fontcolor("yellow") + '&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp' +'<b>Detected Date</b>  :      ' + DETECT_DATE.fontcolor("yellow")  +'&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp' +'<b>Faclity Kind</b>  :      ' + FACILITYKIND.fontcolor("yellow")  +'&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp' + '<b>Leak At </b>   :      '  + LEAKAT.fontcolor("yellow") + '&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp' + ' <b>How Detected</b>  :      ' + HOWDETECTED.fontcolor("yellow") +'&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp' +'<b>PPM </b>  :      '+ PPM.fontcolor("yellow") +'&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp' +'<br></br><b>Gas % </b>  :      ' + GAS_PERCENTAGE.fontcolor("yellow") +'&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp' +' <b>Spread</b>  :      ' + SPREAD.fontcolor("yellow") +'&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp' +'<b>Veg Damage</b>  :      '  + VEG_DAMAGE.fontcolor("yellow") +'&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp' +'<b>Proximity to Building</b>   :      ' + PROXIMITY_TO_BLD.fontcolor("yellow") +'&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp' +'<b>Paving Code</b>  :      ' + PAVING_CODE.fontcolor("yellow")+ '</li>' );
                
			    


			$('#list ul').append('</ul>');			

$('#list').listview('refresh');        

	





   if (LEAK_CODE == "Code 1")
  {
  
  var options = '';
  
        options = '<option value="0170">Main</option><option value="0280">Service </option><option value="0750">DUPLICATE </option><option value="0510">No Gas </option><option value="0350">MSA </option><option value="0390">Not Distribution </option><option value="0170">Field Gas </option><option value="0410">Regulator Station </option>';
//		options.fontcolor("yellow");
$('#Leakver').addClass('ui-btn-up-b');  

  $('#Leakver').html(options).show();
  

    } else {
	options = '<option value="0170">Main </option><option value="0280">Service </option><option value="0750">DUPLICATE </option><option value="0510">No Gas </option><option value="0350">MSA </option><option value="0390">Not Distribution </option><option value="0170">Field Gas </option><option value="0410">Regulator Station </option><option value="0680">Re-evaluate Leak </option>';
$('#Leakver').addClass('ui-btn-up-b');  
  $('#Leakver').html(options).show();
    }


	
					
/*				

if (LEAK_CODE1 == "Code 1")
  {
  
  var select=document.getElementById('Leakver');

for (i=0;i<select.length;  i++) {
   if (select.options[i].value=='9') {
     select.remove(i);
   }
}

				}
				*/
				

});
	
			//$(document).delegate('#leakinvestigation', 'pagebeforeshow', function() {
			$('#menu_click').click(function() 
					{
			
							$("#Damage").prop("disabled", true);   
							$("#pretest").prop("disabled", true);   
							$("#check").prop("disabled", true);   
							$("#mechanical").prop("disabled", true);   
							$("#pcb").prop("disabled", true); 
			  		
			  		
										
					 					var myXML1 = localStorage.getItem("OrdersXML");
										 $('#order_list1').empty();
					 //$('#order_list1').fadeOut();
					//$('#orders #order_list').empty();
					//Build Orders
					$(myXML1).find("Order").each(function() {
						var ProcID1 = $(this).attr("ProcID");
						var Status1 = $(this).attr("Status");
						//  console.log("ProcID: " + ProcID + "Status: " + Status);
						if ((ProcID1 == "EMBM_LR_MI") && (Status1 == "N" ))
						{
							$("#order_list1").append('<li><a href="">' + $(this).text() + '</a></li>');				
						}
					});
					$('#order_list1').listview('refresh');
					//$('#order_list1 ul').append('</ul>');			
					
		
					
			
			});
			
			/*
									

						
	
	
	
	
	
	
});									
										   
    */			

   			// include this file before your jquery-mobile script tag
$(document).delegate('.ui-navbar ul li > a', 'click', function() {
  //search the navbar to deactivate the active button
  $(this).closest('.ui-navbar').find('a').removeClass('ui-btn-active');

  //change the active tab
  $(this).addClass('ui-btn-active');

  //hide the siblings
  $('#' + $(this).attr('data-href')).show().siblings('.tab-content').hide();

  return false;
});
   


										   
                                    
            
                                    
	
                  
                  $('#logout').click(function()
				  {
                                     session = "F";
                                     
                                     
			if($("#remember1").is(":checked"))
                    {
                        localStorage.setItem("Username",$('#username1').val());
                        localStorage.setItem("Password",$('#password1').val());
                        localStorage.setItem("SaveAccount", "True");
                    }
					});
                  

                  function parseXML(xml)
                  {
                    return xml;
                  }
                  
                  function Validate_Login(uname,pwd)
                  {
				  
				  
				  if(uname == "test" && pwd == "test")
				  {
				        
						
						                 $.mobile.changePage("#orders", "fade");
				  }
				  else
				  {
					alert("Invalid Credentials");	
				  }
				  
				  
                  /*LUserId = encodeURIComponent(uname);
                  LPassWord = encodeURIComponent(pwd);
                  
                  var parameters = "startdate="+LUserId +"&PWD="+ LPassWord ;
                  console.log(parameters);
            
                  $.ajax({
                         type: "POST",
                         url: "http://anica.azurewebsites.net/auth/Logon.asp",
                         async: false,
                         data: parameters,
                         success:function(status)
                         {
                         console.log(status);
                            if(status.indexOf("1") !== -1)
                            {
                                session='S';
                                //return status;
                                console.log("Login Successful");
                            }
                         
                                                     },
                         error : function(a, b, c){
                         console.log("Login check failed");
                         }
                         }); */
                  }
                  
                  function remember_me()
                  {
                  var uname = $("#username").val();
                  var pwd = $("#password").val();
                    if ($('#remember').is(":checked")) 
					{
                  
                        localStorage.setItem('username', uname);
                        localStorage.setItem('password', pwd);
                        localStorage.setItem('remember', 'true');
                    }
                  }


				  //$('#LeakRepair :input').attr('disabled', true);
				  
				  
				  
	

		

	


	$("a[data-role=tab]").each(function () {
    var anchor = $(this);
    anchor.bind("click", function () {
        $.mobile.changePage(anchor.attr("href"), {
            transition: "none",
            changeHash: false
        });
        return false;
    });
});

$("div[data-role=page]").bind("pagebeforeshow", function (e, data) {
    $.mobile.silentScroll(0);
    $.mobile.changePage.defaults.transition = 'slide';
});


     $('#Sync').click(function()
				  {
					UploadWeb();
					LocalStorage();
					Build_Orders();
				  });
	

	
	
		
  $('#menuPanel').delegate('li', 'click', function() {
		
		var orderNo = $(this).text();
		orderNo = orderNo.replace(/\s+/g, '');
		var myXML1 = localStorage.getItem(orderNo);
		
		$('#order_list1').listview('refresh');
		
					$('#list').empty();
					var FACILITYKIND = $(myXML1).find("FACILITY_KIND").text();
					var LEAKAT = $(myXML1).find("LEAK_AT").text();
 					var HOWDETECTED = $(myXML1).find("HOW_DETECTED").text();
					var PPM  = $(myXML1).find("PPM").text();
					var GAS_PERCENTAGE = $(myXML1).find("GAS_PERCENTAGE").text();
					var SPREAD = $(myXML1).find("SPREAD").text();
					var VEG_DAMAGE = $(myXML1).find("VEG_DAMAGE").text();
					var PROXIMITY_TO_BLD = $(myXML1).find("PROXIMITY_TO_BLD").text();
					var PAVING_CODE = $(myXML1).find("PAVING_CODE").text();
					var COMPANY_CODE = $(myXML1).find("COMPANY_CODE").text();
					var LEAK_CODE = $(myXML1).find("LEAK_CODE").text();
					var DETECT_DATE = $(myXML1).find("DETECT_DATE").text();
					var TYPE_REPAIR = $(myXML1).find("TYPE_REPAIR").text();
					var MATERIAL = $(myXML1).find("MATERIAL").text();
					var LEAK_IN = $(myXML1).find("LEAK_IN").text();
					var CAUSE = $(myXML1).find("CAUSE").text();
					var YEAR_INSTALLED = $(myXML1).find("YEAR_INSTALLED").text();
					var SOIL_TYPE = $(myXML1).find("SOIL_TYPE").text();
					var PIPE_SIZE = $(myXML1).find("PIPE_SIZE").text();
					var PAVING_CODE = $(myXML1).find("PAVING_CODE").text();
					var LEAK_VERI_RESULT = $(myXML1).find("LEAK_VERI_RESULT").text();



						$("#list").append('<li> <b>Leak Code</b> :      ' + LEAK_CODE.fontcolor("yellow") + '&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp' +'<b>Detected Date</b>  :      ' + DETECT_DATE.fontcolor("yellow")  +'&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp' +'<b>Faclity Kind</b>  :      ' + FACILITYKIND.fontcolor("yellow")  +'&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp' + '<b>Leak At </b>   :      '  + LEAKAT.fontcolor("yellow") + '&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp' + ' <b>How Detected</b>  :      ' + HOWDETECTED.fontcolor("yellow") +'&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp' +'<b>PPM </b>  :      '+ PPM.fontcolor("yellow") +'&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp' +'<br></br><b>Gas % </b>  :      ' + GAS_PERCENTAGE.fontcolor("yellow") +'&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp' +' <b>Spread</b>  :      ' + SPREAD.fontcolor("yellow") +'&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp' +'<b>Veg Damage</b>  :      '  + VEG_DAMAGE.fontcolor("yellow") +'&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp' +'<b>Proximity to Building</b>   :      ' + PROXIMITY_TO_BLD.fontcolor("yellow") +'&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp' +'<b>Paving Code</b>  :      ' + PAVING_CODE.fontcolor("yellow")+ '</li>' );
                
			    

            
			$('#list ul').append('</ul>');			

$('#list').listview('refresh');        
                    $('#Street').val($(myXML1).find("STREET").text());
					$('#city').val($(myXML1).find("CITY").text());
				/*  
					$('#leakcode').val($(myXML1).find("LEAK_CODE").text());
					$('#detecteddate').val($(myXML1).find("DETECT_DATE").text());
					$('#facility').val($(myXML1).find("FACILITY_KIND").text());
                    $('#leakat').val( $(myXML1).find("LEAK_AT").text() );
                    $('#howdetected').val($(myXML1).find("HOW_DETECTED").text());
					$('#ppm').val($(myXML1).find("PPM").text());
					$('#gas').val($(myXML1).find("GAS_PERCENTAGE").text());
					$('#spread').val($(myXML1).find("SPREAD").text());
					$('#vegdamage').val($(myXML1).find("VEG_DAMAGE").text());
					$('#ptobuild').val($(myXML1).find("PROXIMITY_TO_BLD").text());
					$('#pavingcode').val($(myXML1).find("PAVING_CODE").text());
					$('#remarks1').val($(myXML1).find("REMARKS").text());
				    //$('#Leakver').val($(myXML1).find("LEAK_VERI_RESULT").text());
					$('#Street').val($(myXML1).find("STREET").text());
					$('#city').val($(myXML1).find("CITY").text());
                 $('#Typeofrepair').val($(myXML1).find("TYPE_REPAIR").text());
					$('#Material').val($(myXML1).find("MATERIAL").text());
					$('#Leakin').val($(myXML1).find("LEAK_IN").text());
					$('#Cause').val($(myXML1).find("CAUSE").text());
					$('#year').val($(myXML1).find("YEAR_INSTALLED").text());
					$('#Soiltype').val($(myXML1).find("SOIL_TYPE").text());
					$('#PipeSize').val($(myXML1).find("PIPE_SIZE").text());
					
					*/
					
					
//});				


   if (LEAK_CODE == "Code 1")
  {
  
  var options = '';
  
        options = '<option> </option><option value="0170">Main</option><option value="0280">Service </option><option value="0750">DUPLICATE </option><option value="0510">No Gas </option><option value="0350">MSA </option><option value="0390">Not Distribution </option><option value="0170">Field Gas </option><option value="0410">Regulator Station </option>';
//		options.fontcolor("yellow");
$("#Leakver").val($("#Leakver option:first").val());
$('#Leakver').addClass('ui-btn-up-b');  

  $('#Leakver').html(options).show();
  

    } else {
	options = '<option> </option><option value="0170">Main </option><option value="0280">Service </option><option value="0750">DUPLICATE </option><option value="0510">No Gas </option><option value="0350">MSA </option><option value="0390">Not Distribution </option><option value="0170">Field Gas </option><option value="0410">Regulator Station </option><option value="0680">Re-evaluate Leak </option>';
	
	$("#Leakver").val($("#Leakver option:first").val());

$('#Leakver').addClass('ui-btn-up-b');  
  $('#Leakver').html(options).show();
    }
  


   
   
   
   //if (select.options[i].value=='3') {
     
	 
   //}
   
   



//if (LEAK_CODE == "Code 2")
/*else
{



var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
var today = new Date();
var t1= DETECT_DATE ;
var t2= today;

var x=t1.split(“-”);
var y=t2.split(“-”);
//date format(Fullyear,month,date)
var date1=new Date(x[2],(x[1]-1),x[0]);
var date2=new Date(y[2],(y[1]-1),y[0]);
var month1=x[1]-1;
var month2=y[1]-1;
//Calculate difference between the two dates, and convert to days
diffDays=Math.ceil((date2.getTime()-date1.getTime())/(one_day));
// numberofDays gives the diffrence between the two dates.
alert(diffDays);
if(diffDays  > "30" )
{
alert("Detect Date is more than 30 days");
}
   }




  //var val1 = document.getElementById('Leakver').value;
  //$("#Leakver").val();
   
     
//alert(val1);

  */ 


		//});

	});
		
	$('#Leakver').on('change', function () {
    var $this = $(this),
        val   = $this.val();
 
    var options = '';
    if($(this).val() == '0170') {
	    
	options = '<option> </option><option value="0070">Clamped</option><option value="0750">Altered Main - Repair Complete</option><option value="0760">Altered Main - Planned</option><option value="0790">Abandoned Main - Immediate</option><option value="0800">Abandoned Main - Planned</option><option value="0650">Replace Main > 40 ft</option><option value="0490">Welded</option><option value="0680">Temporary Repair-Main </option><option value="0220">Other</option>';
        
    }
    else if ($(this).val() == '0280'){
        options = '<option> </option><option value="0070">Clamped</option><option value="0730">Replace Service - Immediate</option><option value="0740">Replace Service - Planned</option><option value="0770">Altered Service - Immediate</option><option value="0780">Altered Service - Planned</option><option value="0810">Abandoned Service - Immediate</option><option value="0820">Abandoned Service - Planned</option><option value="0490">Welded</option><option value="0670">Temporary Repair-Service </option><option value="0220">Other</option>';
    }
	
	
	$('#Typeofrepair').attr('data-theme', 'c').removeClass('ui-body-d').addClass('ui-body-e');
	
    $('#Typeofrepair').addClass('ui-btn-up-b');  
    $('#Typeofrepair').html(options).show();

	
	/*
	if (val == "1" || "2") {
                          
	 '#le
	 akrepairorder'.access = "open";
	 var y=document.getElementById("Typeofrepair");
     y.disabled= false ;
	 
     $("#Material").attr("readonly", true);
     $("#PipeSize").attr("readonly", true);
	 
     
     $("#Cause").attr("readonly", true);
     $("#year").attr("readonly", true);
     $("#yearunknown").attr("readonly", true);
     $("#Soiltype").attr("readonly", true);
     MATERIAL.access = "readOnly";
	PIPE_SIZE.access = "readOnly";
	DPSS_NO.access = "readOnly";
	LEAK_IN.access = "readOnly";
	CAUSE.access = "readOnly";
	YEAR_INSTALLED.access = "readOnly";
	YEAR_UNKNOWN.access = "readOnly";
	SOIL_TYPE.access = "readOnly";
	CMS_WORK_REQ_NO.access = "readOnly";
	MAIN_LINE_NO.access = "readOnly";
	 
	 
	 
	 
	 
	 
   }
   
   
   else
   {
   var x=document.getElementById("Typeofrepair");
    x.disabled=true;
	}
  if (val == "3") {   
    alert("You have selected Duplicate. Please Provide Orignal order information in remarks.");
	 var y=document.getElementById("Typeofrepair");
     y.disabled= false ;
	 
     $("#Material").attr("readonly", true);
     $("#PipeSize").attr("readonly", true);
	 
     
     $("#Cause").attr("readonly", true);
     $("#year").attr("readonly", true);
     $("#yearunknown").attr("readonly", true);
     $("#Soiltype").attr("readonly", true);
	
   }
   
   if ( (val == "4"  ) ||
        (val == "5" ) ||
	   (val == "6" ) ||
	   (val == "7" ) ||
	   (val == "8" ) ) {   
 
	 var y=document.getElementById("Typeofrepair");
     y.disabled= false ;
     $("#Material").attr("readonly", true);
     $("#PipeSize").attr("readonly", true);
	 
     
     $("#Cause").attr("readonly", true);
     $("#year").attr("readonly", true);
     $("#yearunknown").attr("readonly", true);
     $("#Soiltype").attr("readonly", true);
	
   }
   
   
   */
		
});		
	
// ASSIGNING VALUES TO MATERIAL BASED ON SELECTED TYPE OF REPAIR
	
		$('#Typeofrepair').on('change', function () {
		
		var $this = $(this),
        val   = $this.val();
        
    var options = '';
    if(($(this).val() == '0070')|| ($(this).val() == '0490')){
	   
	options = '<option> </option><option value="3">Steel-Bare w/CP</option><option value="4">Steel-Bare w/o CP</option><option value="1">Steel-Coated w/CP</option><option value="2">Steel-Coated-w/o CP</option><option value="11">Steel HP-Bare w/CP</option><option value="12">Steel HP-Bare w/o CP</option><option value="9">Steel HP-Coated w/CP</option><option value="10">Steel HP-Coated w/o CP</option><option value="5">Other (Not Plastic)</option>';
        
    }
	
    else if (($(this).val() == '0750') || ($(this).val() == '0760') || ($(this).val() == '0770')  || ($(this).val() == '0780') ){
        options = '<option> </option><option value="6">Plastic - Polyethylene</option><option value="3">Steel-Bare w/CP</option><option value="4">Steel-Bare w/o CP</option><option value="1">Steel-Coated w/CP</option><option value="2">Steel-Coated-w/o CP</option><option value="11">Steel HP-Bare w/CP</option><option value="12">Steel HP-Bare w/o CP</option><option value="9">Steel HP-Coated w/CP</option><option value="10">Steel HP-Coated w/o CP</option><option value="5">Other (Not Plastic)</option>';
	
    }
	
	
	
	
	
	/*
	
	   else if($(this).val() == '0070'){
	
	options = '<option value="0220">Pipe</option><option value="0070">Fitting</option><option value="0160">Joint</option><option value="0250">Riser </option><option value="0300">Supply Line Tap</option><option value="0310">Transition Fitting</option><option value="0330">Valve</option><option value="0420">Mechanical Fitting (Remarks Required)</option><option value="0210">Other (Remarks Required)</option>';
	     alert(val);
        $('#Leakin').html(options).show();	
    }
	
	
	else if ($(this).val() == '0490')
     {          
	 options = '<option value="0220">Pipe</option><option value="0070">Fitting</option><option value="0160">Joint</option><option value="0250">Riser </option><option value="0300">Supply Line Tap</option><option value="0310">Transition Fitting</option><option value="0330">Valve</option><option value="0210">Other (Remarks Required)</option>';
      $('#Leakin').html(options).show();		
	}	 
	
	*/
	
	
	
	
    else
     {          
	 options = '<option> </option><option value="6">Plastic - Polyethylene</option><option value="7">Plastic - Other (PVC, Tenite, unk)</option><option value="8">Unknown/Not Exposed</option><option value="3">Steel-Bare w/CP</option><option value="4">Steel-Bare w/o CP</option><option value="1">Steel-Coated w/CP</option><option value="2">Steel-Coated-w/o CP</option><option value="11">Steel HP-Bare w/CP</option><option value="12">Steel HP-Bare w/o CP</option><option value="9">Steel HP-Coated w/CP</option><option value="10">Steel HP-Coated w/o CP</option><option value="5">Other (Not Plastic)</option>';

	 
      }	 
		
	$('#Material').addClass('ui-btn-up-b');  
	$('#Material').html(options).show();		

});		         

/*
// ASSIGNING VALUES TO LEAK IN BASED ON SELECTED TYPE OF REPAIR
	
		$('#Typeofrepair').on('change', function () {
		
		var $this = $(this),
        val   = $this.val();
		alert(val);
 
    var options = '';
    if($(this).val() == '0070'){
	
	options = '<option value="0220">Pipe</option><option value="0070">Fitting</option><option value="0160">Joint</option><option value="0250">Riser </option><option value="0300">Supply Line Tap</option><option value="0310">Transition Fitting</option><option value="0330">Valve</option><option value="0420">Mechanical Fitting (Remarks Required)</option><option value="0210">Other (Remarks Required)</option>';
        
    }
	
	
	
	else if ($(this).val() == '0490')
     {          
	 options = '<option value="0220">Pipe</option><option value="0070">Fitting</option><option value="0160">Joint</option><option value="0250">Riser </option><option value="0300">Supply Line Tap</option><option value="0310">Transition Fitting</option><option value="0330">Valve</option><option value="0210">Other (Remarks Required)</option>';
	 }	 
	
	  
		
	$('#Leakin').html(options).show();	
		
		



});		         */

// ASSIGNING VALUES TO LEAK IN BASED ON SELECTED TYPE OF REPAIR


$('#Material').on('change', function () {
		//$('label[for=ExistingPipe], input#ExistingPipe').show();
		//$("#ExistingPipe").prop("disabled", false);   
		
		var $this = $(this),
        val   = $this.val();
		
    var options = '';
    if($(this).val() == '8'){
	
	options = '<option value="0320">Unknown-Not exposed</option>';
        
    }
	
	
	
	else if ($(this).val() == '6')
     {          
	 options = '<option> </option><option value="0220">Pipe</option><option value="0080">Fitting body or seals – (Not in fusion)</option><option value="0090">Fusion (Coupling)</option><option value="0100">Fusion (Elbow)</option><option value="0110">Fusion (Tapping Tee)</option><option value="0120">Fusion (Reducer)</option><option value="0130">Fusion (Tee-Inline)</option><option value="0140">Fusion (End Cap)</option><option value="0410">Fusion (Joint)</option><option value="0290">Fusion (Service Saddle)</option><option value="0020">Fusion (Branch Saddle)</option><option value="0260">Anodeless Riser</option><option value="0310">Transition Fitting</option><option value="0330">Valve</option><option value="0420">Mechanical Fitting (Remarks Required)</option><option value="0210">Other (Remarks Required)</option><option value="0320">Unknown – Not exposed</option>';
	 }	 
	
	
	
    else if ($(this).val() == '7') {
        options = '<option value="0220">Pipe</option><option value="0210">Other (Remarks Required)</option><option value="0320">Unknown – Not exposed</option>';
    }

	else if (($(this).val() == '1') || ($(this).val() == '2') || ($(this).val() == '3')  || ($(this).val() == '4') || ($(this).val() == '9') || ($(this).val() == '10') || ($(this).val() == '11')  || ($(this).val() == '12')){
	
	 
        options = '<option> </option><option value="0220">Pipe</option><option value="0070">Fitting</option><option value="0160">Joint</option><option value="0250">Riser </option><option value="0260">Anodeless Riser</option><option value="0400">Green/Black Sleeve AL Riser</option><option value="0300">Supply Line Tap</option><option value="0310">Transition Fitting</option><option value="0330">Valve</option><option value="0420">Mechanical Fitting (Remarks Required)</option><option value="0210">Other (Remarks Required)</option><option value="0320">Unknown – Not exposed</option>';
   }
   if (($(this).val() == '6') && (($("#Typeofrepair").val()  == "0750") || ($("#Typeofrepair").val()  == "0770"))){
                //$("#ExistingPipe").prop("disabled", true);   
             //document.getElementById("#ExistingPipe").style.visibility = "hidden";
			 //$('label[for=ExistingPipe], input#ExistingPipe').hide();
     //$("#ExistingPipe).hide();
	 //$('label[for=ExistingPipe], input#ExistingPipe').show();
     
   $("#ExistingPipe").prop("disabled", false);   
   }
		
		
		
		
	$('#Leakin').addClass('ui-btn-up-b');  
    $('#Leakin').html(options).show();	 


var options1 = '';
    if ((($(this).val() == '1') || ($(this).val() == '2') || ($(this).val() == '3')  || ($(this).val() == '4') || ($(this).val() == '9') || ($(this).val() == '10') || ($(this).val() == '11')  || ($(this).val() == '12')) && ($("#Leakver").val()  == "0170")){
	
	        options1 = '<option> </option><option value="A">3/8”</option><option value="D">¾”</option><option value="E">1"</option><option value="F">1 ¼”</option><option value="G">1 ½”</option><option value="H">2”</option><option value="I">3”</option><option value="J">4”</option><option value="K">6”</option><option value="L">6”+</option><option value="M">8”</option><option value="N">8”+</option><option value="O">10”</option><option value="P">10”+</option><option value="Q">12”</option><option value="R">16”</option><option value="S">20”</option><option value="T">22”</option><option value="U">24”</option><option value="V">30”</option><option value="W">34”</option><option value="X">36”</option>';
	
	
}

else if ((($(this).val() == '1') || ($(this).val() == '2') || ($(this).val() == '3')  || ($(this).val() == '4') || ($(this).val() == '9') || ($(this).val() == '10') || ($(this).val() == '11')  || ($(this).val() == '12')) && ($("#Leakver").val()  == "0280")){
	
	        options1 = '<option> </option><option value="D">¾”</option><option value="E">1"</option><option value="F">1 ¼”</option><option value="G">1 ½”</option><option value="H">2”</option><option value="I">3”</option><option value="J">4”</option><option value="K">6”</option><option value="L">6”+</option><option value="M">8”</option><option value="N">8”+</option><option value="O">10”</option><option value="P">10”+</option><option value="Q">12”</option><option value="R">16”</option><option value="S">20”</option><option value="T">22”</option><option value="U">24”</option><option value="V">30”</option><option value="W">34”</option><option value="X">36”</option>';
	
	
}

else if ((($(this).val() == '6') || ($(this).val() == '7')) && ($("#Leakver").val()  == "0170")){
	
	        options1 = '<option> </option><option value="E">1"</option><option value="H">2”</option><option value="I">3”</option><option value="J">4”</option><option value="K">6”</option><option value="M">8”</option>';
	
	
}

else if ((($(this).val() == '6') || ($(this).val() == '7')) && ($("#Leakver").val()  == "0280")){
	
	        options1 = '<option> </option><option value="B">½” CTS</option><option value="C">½” IPS</option><option value="E">1"</option><option value="H">2”</option><option value="I">3”</option><option value="J">4”</option><option value="K">6”</option><option value="M">8”</option>';
	
	
}

else if ((($(this).val() == '8')) && ($("#Leakver").val()  == "0170")){
	
	        options1 = '<option> </option> <option value="D">¾”</option><option value="E">1"</option><option value="F">1 ¼”</option><option value="G">1 ½”</option><option value="H">2”</option><option value="I">3”</option><option value="J">4”</option><option value="K">6”</option><option value="L">6”+</option><option value="M">8”</option><option value="N">8”+</option><option value="O">10”</option><option value="P">10”+</option><option value="Q">12”</option><option value="R">16”</option><option value="S">20”</option><option value="T">22”</option><option value="U">24”</option><option value="V">30”</option><option value="W">34”</option><option value="X">36”</option>';
	
	
}
else if ((($(this).val() == '8')) && ($("#Leakver").val()  == "0280")){

 options1 = '<option> </option><option value="A">3/8”</option><option value="B">½” CTS</option><option value="C">½” IPS</option><option value="D">¾”</option><option value="E">1"</option><option value="F">1 ¼”</option><option value="G">1 ½”</option><option value="H">2”</option><option value="I">3”</option><option value="J">4”</option><option value="K">6”</option><option value="L">6”+</option><option value="M">8”</option><option value="N">8”+</option><option value="O">10”</option><option value="P">10”+</option><option value="Q">12”</option><option value="R">16”</option><option value="S">20”</option><option value="T">22”</option><option value="U">24”</option><option value="V">30”</option><option value="W">34”</option><option value="X">36”</option>';

}





$('#PipeSize').addClass('ui-btn-up-b');  
    $('#PipeSize').html(options1).show();	 
	
		

});		      
$('#yearunknown').change(function() {

    $('#year').attr('disabled', $(this).is(':checked'));
});   

$('#Unreadable').change(function() {

    //$('#ExistingPipe').attr('disabled', $(this).is(':checked'));
//	$(document.getElementById("#ExistingPipe").style.visibility = "hidden");
//$('label[for=ExistingPipe], input#ExistingPipe').hide();
          $('#ExistingPipe').attr('disabled', $(this).is(':checked'));
         //$("#ExistingPipe").prop("disabled", true);   
});   

$('#id').change(function() {

    $('#meternumber').attr('disabled', $(this).is(':checked'));
	$('#serviceid').attr('disabled', $(this).is(':checked'));
});   


$('#PlasticFailure').click(function() {



if ((($("#Typeofrepair").val()  == "0730") || ($("#Typeofrepair").val()  == "0740") || ($("#Typeofrepair").val()  == "0770") || ($("#Typeofrepair").val()  == "0780") || ($("#Typeofrepair").val()  == "0810") || ($("#Typeofrepair").val()  == "0820"))  && ($("#serviceid").val()  == "")  && ($('#id').is(':checked'))){

$("#meternumber").prop("disabled", false);   

}
else
$("#serviceid").prop("disabled", false);   
});  

$('#WorkedPerform').click(function() {

//$("#Damage").prop("disabled", false);   

//$("#mechanical").prop("disabled", false);   
 

 
 
 if (($("#Cause").val() == '0110') || ($("#Cause").val() == '0120') || ($("#Cause").val() == '0130') || ($("#Cause").val() == '0150')){
 
  $("#Damage").prop("disabled", false);    
 }

else if (($("#Material").val() == '6') && (($("#Typeofrepair").val()  == "0750") || ($("#Typeofrepair").val()  == "0770"))){


$("#pretest").prop("disabled", false);   
}
else if  (($("#Typeofrepair").val()  == "0730") || ($("#Typeofrepair").val()  == "0750") || ($("#Typeofrepair").val()  == "0770") || ($("#Typeofrepair").val()  == "0790") || ($("#Typeofrepair").val()  == "0810") || ($("#Typeofrepair").val()  == "0650") || ($("#Typeofrepair").val()  == "0220")){
$("#pcb").prop("disabled", false);

}
else if  (($("#Typeofrepair").val()  == "0070") || ($("#Typeofrepair").val()  == "0490") || ($("#Typeofrepair").val()  == "0220")){


$("#check").prop("disabled", false);   

}

else if ($("#Leakin").val() == '0420'){

$("#mechanical").prop("disabled", false);   
}

if  (COMPANY_CODE == '2100') {

$("#pcb").prop("disabled", true);   
$("#GTS").prop("disabled", false);   
$("#Leaktest").prop("disabled", false);   


}




});   

/*
$('#Material').on('change', function () {
		
		
		var $this = $(this),
        val   = $this.val();
		
    var options = '';
    if($(this).val() == '8'){
	
	options = '<option value="0270">Unknown- Not Exposed</option>';
        
    }
	
	
	
	else if ($(this).val() == '6')
     {          
	 options = '<option value="0030">Construction Defect – Compaction</option><option value="0040">Construction Defect – Exc Bending/Strain</option><option value="0050">Construction Defect – Joint (Fusion or Mech)</option><option value="0060">Construction Defect – Prior Damage Loc</option><option value="0070">Construction Defect - Rock</option><option value="0080">Construction Defect - Sub-Structure</option><option value="0110">Damaged by 3rd Party + ignition by static</option><option value="0140">Damaged by Natural Cause - Not Tree Root</option><option value="0160">Electrostatic Discharge-existing pipe</option><option value="0170">Electrostatic Discharge-new pipe</option><option value="0210">Material Failure – Unknown – not obvious</option><option value="0260">Tree Root- Damage</option>';
	 }	 
	
  $('#Leakin').html(options).show();	  		
		

});		         

*/
// ASSIGNING VALUES TO CAUSE BASED ON SELECTED LEAK IN
$('#Leakin').on('change', function () {
		
		
		var $this = $(this),
        val   = $this.val();
		
    var options = '';
    if(($(this).val() == '320') || ($("#Material").val()  == "8")){
	
	options = '<option> </option><option value="0270">Unknown- Not Exposed</option>';
        
    }
	
	
	
	else if ((($(this).val() == '0220') || ($(this).val() == '0310')) && (($("#Material").val()  == "6")  || ($("#Material").val()  == "7")))
     {          
	 options = '<option> </option><option value="0030">Construction Defect – Compaction</option><option value="0040">Construction Defect – Exc Bending/Strain</option><option value="0050">Construction Defect – Joint (Fusion or Mech)</option><option value="0060">Construction Defect – Prior Damage Loc</option><option value="0070">Construction Defect - Rock</option><option value="0080">Construction Defect - Sub-Structure</option><option value="0110">Damaged by 3rd Party + ignition by static</option><option value="0120">Damaged by Company Contractor</option><option value="0130">Damaged by Company Crew</option><option value="0150">Damaged by Third Party </option><option value="0230">Other (thread, coupling, clamp, valve stem, etc.)</option><option value="0140">Damaged by Natural Cause - Not Tree Root</option><option value="0160">Electrostatic Discharge-existing pipe</option><option value="0170">Electrostatic Discharge-new pipe</option><option value="0210">Material Failure – Unknown – not obvious</option><option value="0240">Prior Pinch/ Squeeze</option><option value="0260">Tree Root- Damage</option>';
	 }	 
	 
	 else if (($(this).val() == '0080') && (($("#Material").val()  == "6") || ($("#Material").val()  == "7")))
	 {
	 options = '<option> </option><option value="0030">Construction Defect – Compaction</option><option value="0040">Construction Defect – Exc Bending/Strain</option><option value="0050">Construction Defect – Joint (Fusion or Mech)</option><option value="0060">Construction Defect – Prior Damage Loc</option><option value="0070">Construction Defect - Rock</option><option value="0080">Construction Defect - Sub-Structure</option><option value="0110">Damaged by 3rd Party + ignition by static</option><option value="0120">Damaged by Company Contractor</option><option value="0130">Damaged by Company Crew</option><option value="0150">Damaged by Third Party </option><option value="0230">Other (thread, coupling, clamp, valve stem, etc.)</option><option value="0140">Damaged by Natural Cause - Not Tree Root</option><option value="0160">Electrostatic Discharge-existing pipe</option><option value="0170">Electrostatic Discharge-new pipe</option><option value="0210">Material Failure – Unknown – not obvious</option><option value="0250">Tapping Tee Cap Cracked</option><option value="0260">Tree Root- Damage</option>';
	 }
	 
	 else if  (($("#Material").val()  == "6") || ($("#Material").val()  == "7"))
	 {
	 options = '<option> </option><option value="0030">Construction Defect – Compaction</option><option value="0040">Construction Defect – Exc Bending/Strain</option><option value="0050">Construction Defect – Joint (Fusion or Mech)</option><option value="0060">Construction Defect – Prior Damage Loc</option><option value="0070">Construction Defect - Rock</option><option value="0080">Construction Defect - Sub-Structure</option><option value="0110">Damaged by 3rd Party + ignition by static</option><option value="0120">Damaged by Company Contractor</option><option value="0130">Damaged by Company Crew</option><option value="0150">Damaged by Third Party </option><option value="0230">Other (thread, coupling, clamp, valve stem, etc.)</option><option value="0140">Damaged by Natural Cause - Not Tree Root</option><option value="0160">Electrostatic Discharge-existing pipe</option><option value="0170">Electrostatic Discharge-new pipe</option><option value="0210">Material Failure – Unknown – not obvious</option><option value="0260">Tree Root- Damage</option>';
	 }
	 
	 
	 
	 else if ($(this).val() == '0400') {
	 options = '<option> </option><option value="0410">Corrosion – AG – anode not required</option>';
	 
	 }
	 
	 else if (($("#Material").val() == "1") || ($("#Material").val() == "2") || ($("#Material").val() == "3") || ($("#Material").val() == "4") && ($(this).val() == '0260')){
	 
	 options = '<option> </option><option value="0020">Construction Defect (Remarks Required)</option><option value="0200">Material Defect (split seam, thin wall, etc)</option><option value="0410">Corrosion – AG – anode not required</option><option value="0120">Damaged by Company Contractor</option><option value="0130">Damaged by Company Crew</option><option value="0150">Damaged by Third Party </option><option value="0230">Other (thread, coupling, clamp, valve stem, etc.)</option><option value="0450">Damage- Earth Movement, Quake, Erosion, Etc</option>';
	 
	 
	 }
	 
	 else {
	 options = '<option> </option><option value="0020">Construction Defect (Remarks Required)</option><option value="0200">Material Defect (split seam, thin wall, etc)</option><option value="0410">Corrosion – AG – anode not required</option><option value="0120">Damaged by Company Contractor</option><option value="0130">Damaged by Company Crew</option><option value="0150">Damaged by Third Party </option><option value="0230">Other (thread, coupling, clamp, valve stem, etc.)</option><option value="0420">Corrosion – Installed Anode</option><option value="0430">Corrosion- Anode not required</option><option value="0450">Damage- Earth Movement, Quake, Erosion, Etc</option>';


}	 
    /*else if ((($("#Material").val() == "1") || $("#Material").val() == "2") || $("#Material").val() == "3") || $("#Material").val() == "4") != $(this).val() == '0400')){
	
	     if ((($("#Material").val() == "1") || $("#Material").val() == "2") || $("#Material").val() == "3") || $("#Material").val() == "4") != $(this).val() == '0260')){
	 
	 options = '<option value="0020">Construction Defect (Remarks Required)</option><option value="0200">Material Defect (split seam, thin wall, etc)</option><option value="0410">Corrosion – AG – anode not required</option><option value="0420">Corrosion – Installed Anode</option><option value="0430">Corrosion- Anode not required</option><option value="0450">Damage- Earth Movement, Quake, Erosion, Etc</option>';
	 
	 }
	 else {
	 options = '<option value="0020">Construction Defect (Remarks Required)</option><option value="0450">Damage- Earth Movement, Quake, Erosion, Etc</option><option value="0200">Material Defect (split seam, thin wall, etc)</option><option value="0410">Corrosion – AG – anode not required</option>';

	 }
	}*/
	
	$('#Cause').addClass('ui-btn-up-b');  
  $('#Cause').html(options).show();	  		
		

});		         
         
		 
		 
		 
		 
		 
		 
		 
   
$('#Cause').on('change', function () {
		
		
		var $this = $(this),
        val   = $this.val();
		
    var options = '';
    var options1 = '';
	var options2 = '';
	var options3 = '';
	var options4 = '';
	var options5 = '';
	var options6 = '';
	var options7 = '';
	var options8 = '';
	var options9 = '';
	var options10 = '';
	var options11= '';
	var options12 = '';
	
	// Soil Type
	options = '<option> </option><option value="1">Sandy</option><option value="2">Rocky</option><option value="3">Clay</option><option value="4">Loam</option>';
	$('#Soiltype').addClass('ui-btn-up-b');  
                $('#Soiltype').html(options).show();	  		
		

	// Fitting Type	
		 if (($("#Material").val() == "6")  && ($("#Leakin").val() == '0080')){
	 
	 options1 = '<option> </option><option value="5">Fusion Tapping Tee</option><option value="3">Fusion Coupling</option><option value="6">Fusion Reducer</option><option value="4">Fusion Elbow</option><option value="7">Fusion Tee-Inline</option><option value="8">Fusion End Cap</option><option value="1">Branch Saddle</option><option value="11">Service Saddle</option><option value="13">Mechanical Coupling</option><option value="14">Mechanical Elbow</option><option value="17">Mechanical Reducer</option><option value="16">Mechanical Tee-Inline</option><option value="15">Mechanical End Cap</option><option value="9">Mechanical Fitting-Other</option><option value="10">Mechanical Tapping Tee</option><option value="2">Excess Flow Valve</option><option value="12">Other</option>';
	 
	 }
		else if(($("#Material").val() == "6")  && ($("#Leakin").val() == '0090')){
		options1 = '<option> </option><option value="3">Fusion Coupling</option>';
		
		}
		else if(($("#Material").val() == "6")  && ($("#Leakin").val() == '0100')){
		options1 = '<option> </option><option value="4">Fusion Elbow</option>';
		}
		else if(($("#Material").val() == "6")  && ($("#Leakin").val() == '0110')){
		options1 = '<option> </option><option value="5">Fusion Tapping Tee</option>';
		}
		else if(($("#Material").val() == "6")  && ($("#Leakin").val() == '0120')){
		options1 = '<option> </option><option value="6">Fusion Reducer</option>';
		}
		else if(($("#Material").val() == "6")  && ($("#Leakin").val() == '0130')){
		options1 = '<option> </option><option value="7">Fusion Tee-Inline</option>';
		}
        else if(($("#Material").val() == "6")  && ($("#Leakin").val() == '0140')){
		options1 = '<option> </option><option value="8">Fusion End Cap</option>';
		}
		else if(($("#Material").val() == "6")  && ($("#Leakin").val() == '0410')){
		options1 = '<option> </option><option value="2">Excess Flow Valve</option><option value="12">Other</option>';
		}
		else if(($("#Material").val() == "6")  && ($("#Leakin").val() == '0290')){
		options1 = '<option> </option><option value="11">Service Saddle</option>';
		}
        else if(($("#Material").val() == "6")  && ($("#Leakin").val() == '0020')){
		options1 = '<option> </option><option value="1">Branch Saddle</option>';
		}
		else if(($("#Material").val() == "6")  && ($("#Leakin").val() == '0420')){
		options1 = '<option> </option><option value="9">Mechanical Fitting-Other</option><option value="13">Mechanical Coupling</option><option value="14">Mechanical Elbow</option><option value="17">Mechanical Reducer</option><option value="16">Mechanical Tee-Inline</option><option value="15">Mechanical End Cap</option><option value="10">Mechanical Tapping Tee</option>';
		}
		else if (($("#Material").val() == "6")  && ($("#Leakin").val() == '0210')){
	 
	 options1 = '<option> </option><option value="5">Fusion Tapping Tee</option><option value="3">Fusion Coupling</option><option value="6">Fusion Reducer</option><option value="4">Fusion Elbow</option><option value="7">Fusion Tee-Inline</option><option value="8">Fusion End Cap</option><option value="1">Branch Saddle</option><option value="11">Service Saddle</option><option value="13">Mechanical Coupling</option><option value="14">Mechanical Elbow</option><option value="17">Mechanical Reducer</option><option value="16">Mechanical Tee-Inline</option><option value="15">Mechanical End Cap</option><option value="9">Mechanical Fitting-Other</option><option value="10">Mechanical Tapping Tee</option><option value="2">Excess Flow Valve</option><option value="12">Other</option>';
	 
	 }
		
		$('#fittingtype').addClass('ui-btn-up-b');  
        $('#fittingtype').html(options1).show();	  		
		
		// Leak Position
		
		 if ((($("#Material").val() == "1") || ($("#Material").val() == "2") ||($("#Material").val() == "3")||($("#Material").val() == "4")||($("#Material").val() == "5"))  && ($("#Leakin").val() == '0310')){
	 
	 options2 = '<option> </option><option value="1">Top</option><option value="2">Bottom</option><option value="3">Side</option>';
	 
	 }
		else if (($("#Material").val() == "6")  != ($("#Cause").val() == '0270')){
	 
	 options2 = '<option> </option><option value="1">Top</option><option value="2">Bottom</option><option value="3">Side</option>';
	 
	 }
		$('#leakposition').addClass('ui-btn-up-b');  
        $('#leakposition').html(options2).show();	
		
		
		//Fusion Type 
																 
		if ((($("#Material").val() == "6")  != ($("#Cause").val() == '0270')) && ($("#Leakin").val() == '0090')){
	 
	 options3 = '<option> </option><option value="2">Socket Fusion</option><option value="4">Electro Fusion</option>';
	 
	 }
		
		else if ((($("#Material").val() == "6")  != ($("#Cause").val() == '0270')) && ($("#Leakin").val() == '0100')){
		options3 = '<option> </option><option value="2">Socket Fusion</option><option value="3">Butt Fusion</option>';
		
		}
		
		else if ((($("#Material").val() == "6")  != ($("#Cause").val() == '0270')) && ($("#Leakin").val() == '0110')){
		options3 = '<option> </option><option value="1">Saddle Fusion</option><option value="2">Socket Fusion</option>';
		
		}
		else if ((($("#Material").val() == "6")  != ($("#Cause").val() == '0270')) && ($("#Leakin").val() == '0120')){
		options3 = '<option> </option><option value="2">Socket Fusion</option><option value="3">Butt Fusion</option>';
		
		}
		else if ((($("#Material").val() == "6")  != ($("#Cause").val() == '0270')) && ($("#Leakin").val() == '0130')){
		options3 = '<option> </option><option value="2">Socket Fusion</option><option value="3">Butt Fusion</option>';
		
		}
		else if ((($("#Material").val() == "6")  != ($("#Cause").val() == '0270')) && ($("#Leakin").val() == '0140')){
		
		options3 = '<option> </option><option value="2">Socket Fusion</option><option value="3">Butt Fusion</option>';
		}
		else if ((($("#Material").val() == "6")  != ($("#Cause").val() == '0270')) && ($("#Leakin").val() == '0410')){
		
		options3 = '<option> </option><option value="1">Saddle Fusion</option><option value="2">Socket Fusion</option><option value="3">Butt Fusion</option>';
		}
		else if ((($("#Material").val() == "6")  != ($("#Cause").val() == '0270')) && ($("#Leakin").val() == '0290')){
		options3 = '<option> </option><option value="1">Saddle Fusion</option><option value="2">Socket Fusion</option>';
		
		}
		else if ((($("#Material").val() == "6")  != ($("#Cause").val() == '0270')) && ($("#Leakin").val() == '0020')){
		options3 = '<option> </option><option value="1">Saddle Fusion</option><option value="2">Socket Fusion</option>';
		
		}
		else if ((($("#Material").val() == "6")  != ($("#Cause").val() == '0270')) && ($("#Leakin").val() == '0210')){
		options3 = '<option> </option><option value="1">Saddle Fusion</option><option value="2">Socket Fusion</option><option value="3">Butt Fusion</option>';
		
		}
		
		$('#fusiontype').addClass('ui-btn-up-b');  
        $('#fusiontype').html(options3).show();	
		
		//Riser Type 
		
																 
		 if ((($("#Material").val() == "1") || ($("#Material").val() == "2") ||($("#Material").val() == "3")||($("#Material").val() == "4")||($("#Material").val() == "5"))  && ($("#Leakin").val() == '0250')){
	 
	 options4 = '<option> </option><option value="1">Field Fab</option><option value="2">Pre-fab</option><option value="3">Anodeless</option><option value="4">Stainless Steel</option><option value="5">Riser Adapter</option>';
	 
	 }
		else if ((($("#Material").val() == "1") || ($("#Material").val() == "2") ||($("#Material").val() == "3")||($("#Material").val() == "4")||($("#Material").val() == "5"))  && ($("#Leakin").val() == '0260')){
	 
	 options4 = '<option> </option><option value="3">Anodeless</option><option value="5">Riser Adapter</option>';
	 
	 }
	 else if ((($("#Material").val() == "1") || ($("#Material").val() == "2") ||($("#Material").val() == "3")||($("#Material").val() == "4")||($("#Material").val() == "5"))  && ($("#Leakin").val() == '0400')){
	 
	 options4 = '<option> </option><option value="3">Anodeless</option>';
	 
	 }
			else if ((($("#Material").val() == "6")  && ($("#Leakin").val() == '0260'))){
	 options4 = '<option> </option><option value="3">Anodeless</option><option value="5">Riser Adapter</option>';
		
		}	
		
		
				else if (($("#Material").val() == "6") && ($("#Leakin").val() == '0210')){
	 options4 = '<option> </option><option value="1">Field Fab</option><option value="2">Pre-fab</option><option value="3">Anodeless</option><option value="4">Stainless Steel</option><option value="5">Riser Adapter</option>';
		
		}
		
		$('#risertype').addClass('ui-btn-up-b');  
        $('#risertype').html(options4).show();	
		
		//Reinforcing Sleeve
		
		
		
		
		if (((($("#Material").val() == "1") || ($("#Material").val() == "2") ||($("#Material").val() == "3")||($("#Material").val() == "4")||($("#Material").val() == "5"))  && ($("#Leakin").val() == '0310')) != ($("#Cause").val() == '0270'))  {  
	 
	 options5 = '<option> </option><option value="1">Omitted</option><option value="2">Improperly Installed</option><option value="3">Altered</option><option value="4">Properly Installed</option><option value="5">Not Required</option>';
	 
	 }
		else if (($("#Leakin").val() == '0110') ||($("#Leakin").val() == '0210')||($("#Leakin").val() == '0260')||($("#Leakin").val() == '0310')||($("#Leakin").val() == '0080')||($("#Leakin").val() == '0290')||($("#Leakin").val() == '0420')){
	 options5 = '<option> </option><option value="1">Omitted</option><option value="2">Improperly Installed</option><option value="3">Altered</option><option value="4">Properly Installed</option><option value="5">Not Required</option>';
		
		}	
		else if (($("#Leakin").val() == '0220') ||($("#Leakin").val() == '0410')||($("#Leakin").val() == '0090')||($("#Leakin").val() == '0100')||($("#Leakin").val() == '0120')||($("#Leakin").val() == '0130')||($("#Leakin").val() == '0140')||($("#Leakin").val() == '0330')){
	 options5 = '<option> </option><option value="5">Not Required</option>';
		
		}	
		
		$('#reinforcingsleeve').addClass('ui-btn-up-b');  
        $('#reinforcingsleeve').html(options5).show();	
		
		
		//Pipe Color
		
	    if (($("#Material").val() == "6")  != ($("#Cause").val() == '0270')){
		options6 = '<option> </option><option value="1">Tan/Grey</option><option value="2">Orange</option><option value="3">Yellow</option><option value="4">Black</option>';
		
		}
		$('#pipecolor').addClass('ui-btn-up-b');  
        $('#pipecolor').html(options6).show();	
		
		
		//Manufacturer
		
		if ((($("#Material").val() == "1") || ($("#Material").val() == "2") ||($("#Material").val() == "3")||($("#Material").val() == "4")||($("#Material").val() == "5"))  && (($("#Leakin").val() == '0250')||($("#Leakin").val() == '0260')||($("#Leakin").val() == '0400')||($("#Leakin").val() == '0310'))  != ($("#Cause").val() == '0270')){
	 
	 options7 = '<option> </option><option value="1">DUPONT</option><option value="2">PLEXCO</option><option value="3">UPONOR</option><option value="4">NIPAC</option><option value="5">INNOGAZ</option><option value="6">FRIATEC</option><option value="7">WAYNE</option><option value="8">NO STRESS</option><option value="9">R W LYALL</option><option value="10">CONTINENTAL</option><option value="11">PERFECTION</option><option value="12">NORDSTROM</option><option value="13">PERFORMANCE PIPE</option><option value="14">DRISCO (PHILLIPS)</option><option value="15">POLYPIPE (RINKER)</option><option value="16">CENTRAL PLASTICS</option><option value="17">U.S. POLY CO.</option><option value="18">OTHER/UNKNOWN</option>';
	 }
		else if ((($("#Material").val() == "6")  != ($("#Cause").val() == '0270') && ($("#Leakin").val() == '0210')))  {
		options7 = '<option> </option><option value="1">DUPONT</option><option value="2">PLEXCO</option><option value="3">UPONOR</option><option value="4">NIPAC</option><option value="5">INNOGAZ</option><option value="6">FRIATEC</option><option value="7">WAYNE</option><option value="8">NO STRESS</option><option value="9">R W LYALL</option><option value="10">CONTINENTAL</option><option value="11">PERFECTION</option><option value="12">NORDSTROM</option><option value="13">PERFORMANCE PIPE</option><option value="14">DRISCO (PHILLIPS)</option><option value="15">POLYPIPE (RINKER)</option><option value="16">CENTRAL PLASTICS</option><option value="17">U.S. POLY CO.</option><option value="18">OTHER/UNKNOWN</option>';
		
		}
		$('#Manufacturer').addClass('ui-btn-up-b');  
        $('#Manufacturer').html(options7).show();	
		
		//Installation Method
		
		if ((($("#Material").val() == "1") || ($("#Material").val() == "2") ||($("#Material").val() == "3")||($("#Material").val() == "4")||($("#Material").val() == "5"))  && ($("#Leakin").val() == '0310')  != ($("#Cause").val() == '0270')){
		options8 = '<option> </option><option value="1">Direct Bury</option><option value="2">Cut and Bore/HDD</option><option value="3">Joint Trench</option><option value="4">Insert</option><option value="5">Pipe Split</option><option value="6">Unknown</option>';
		}
		else if((($("#Material").val() == "6")  != ($("#Cause").val() == '0270') && ($("#Leakin").val() == '0210')))  {
            options8 = '<option> </option><option value="1">Direct Bury</option><option value="2">Cut and Bore/HDD</option><option value="3">Joint Trench</option><option value="4">Insert</option><option value="5">Pipe Split</option><option value="6">Unknown</option>';
		}
		
		$('#installationmethod').addClass('ui-btn-up-b');  
        $('#installationmethod').html(options8).show();	
		
		//Shade
		
		
		if ((($("#Material").val() == "1") || ($("#Material").val() == "2") ||($("#Material").val() == "3")||($("#Material").val() == "4")||($("#Material").val() == "5"))  && ($("#Leakin").val() == '0310')  != ($("#Cause").val() == '0270')){
		options9 = '<option> </option><option value="1">Import</option><option value="2">Native</option>';
		}
		else if ((($("#Material").val() == "6")  != ($("#Cause").val() == '0270') && ($("#Leakin").val() == '0210')))  {
            options9 = '<option> </option><option value="1">Import</option><option value="2">Native</option>';
		}
		
		$('#shade').addClass('ui-btn-up-b');  
        $('#shade').html(options9).show();	
		
		
		
		
		// PIPE Sample Taken
		
		


     if (($("#Material").val() == "6")  != ($("#Cause").val() == '0270'))  {
            options10 = '<option> </option><option value="1">Sent to staff</option><option value="2">Not removed (Remarks Required)</option><option value="3">Other (Remarks Required)</option>';
		}
		
		$('#pipesampletaken').addClass('ui-btn-up-b');  
        $('#pipesampletaken').html(options10).show();	
	
	
	
	
		//BackFillMaterial

		if ((($("#Material").val() == "1") || ($("#Material").val() == "2") ||($("#Material").val() == "3")||($("#Material").val() == "4")||($("#Material").val() == "5"))  && ($("#Leakin").val() == '0310')  != ($("#Cause").val() == '0270')){
		options11 = '<option> </option><option value="1">Sand</option><option value="2">Rocky</option><option value="3">Adobe</option><option value="4">Clay</option><option value="5">Loam</option><option value="6">Slurry</option>';
		}
		else if ((($("#Material").val() == "6")  != ($("#Cause").val() == '0270') && ($("#Leakin").val() == '0210')))  {
            options11 = '<option> </option><option value="1">Sand</option><option value="2">Rocky</option><option value="3">Adobe</option><option value="4">Clay</option><option value="5">Loam</option><option value="6">Slurry</option>';
		}
		
		$('#BackFillMaterial').addClass('ui-btn-up-b');  
        $('#BackFillMaterial').html(options11).show();	
		
		
		
		
		
		});		         
				  

				  

                  //}
	
	
	
	
	
	function refresh_leakrepairorder_page() {
		
		/*$('#Leakver').val('').selectmenu('refresh');
		$('#Typeofrepair').val('').selectmenu('refresh');
		$('#Material').val('').selectmenu('refresh');
		$('#Leakin').val('').selectmenu('refresh');
		$('#Cause').val('').selectmenu('refresh');
		$('#PipeSize').val('').selectmenu('refresh');
		$('#Soiltype').val('').selectmenu('refresh');
		$('#fittingtype').val('').selectmenu('refresh');
		$('#installationmethod').val('').selectmenu('refresh');
		$('#leakposition').val('').selectmenu('refresh');
		$('#shade').val('').selectmenu('refresh');
		$('#fusiontype').val('').selectmenu('refresh');
		$('#Manufacturer').val('').selectmenu('refresh');
		$('#ExistingPipe').val('').selectmenu('refresh');
		$('#pipesampletaken').val('').selectmenu('refresh');
		$('#risertype').val('').selectmenu('refresh');
		$('#BackFillMaterial').val('').selectmenu('refresh');
		$('#reinforcingsleeve').val('').selectmenu('refresh');
		$('#pipecolor').val('').selectmenu('refresh');

		*/
		$('Street').val('');
$('city').val('');
$('year').val('');
$('hplinenum').val('');
$('Lot1').val('');
$('Lot2').val('');
$('X').val('');
$('Y').val('');
$('meternumber').val('');
$('serviceid').val('');
$('remarks1').val('');
$('remarks').val('');
		
		
		//$("input[type='checkbox']").attr("checked", false).checkboxradio("refresh");
	


	}
	
	
	
	
function Update()
{
	var text = $('#remarks').val();
	
	GV_XML = textToXML(GV_XML);
	
	$(GV_XML).find('REMARKS').text(text);
	
//var ORDER_NO = $(this).find("ORD_NUM").text();
var LEAK_VERI_RESULT = $("#Leakver").val();


switch(LEAK_VERI_RESULT) 
				{
					case '0170':		
                            code = "0170" ;
                            codetxt = "Main";
			                 break;
			
                    case '0280':
                            code = "0280" ;
                            codetxt = "Service";
			                break;

                     case '0750':
                             code = "0750" ;
                             codetxt = "DUPLICATE";
			                 break;

                    case '0510':
                            code = "0510" ;
                            codetxt = "No Gas";
			                 break;
                    case '0350':
                            code = "0350" ;
                            codetxt = "MSA";
			                break;
                    case '0390':
                            code = "0390" ;
                            codetxt = "Not Distribution";
			                break;
                    case '0170':
                            code = "0170" ;
                            codetxt = "Field Gas";
			                break;
                    case '0410':
                            code = "0410" ;
                            codetxt = "Regulator Station";
			                break;
                    case '0680':
                           code = "0680" ;
                           codetxt = "Re-evaluate Leak";
			               break;
			        default:
							codegrp = "";
							codetyp = "";
							code =  "";
							codetxt = ""
							break;
					
				}

$(GV_XML).find('LEAK_VERI_RESULT').text(codetxt);
code = 0, codetxt = "", codetyp = "", codegrp = "";
//End of Leak Verification Result

//Start of Type of Repair
var TYPE_REPAIR  = $("#Typeofrepair").val();

switch(TYPE_REPAIR) 
				{
					case '0070':		
                            code = "0070" ;
                            codetxt = "Clamped";   
			                 break;
                    case '0730':
                            code = "0730" ;
                            codetxt = "Replace Service - Immediate";
			                break;
                     case '0740':
                             code = "0740" ;
                             codetxt = "Replace Service - Planned"; 
			                 break;
                    case '0750':
                            code = "0750" ;
                            codetxt = "Altered Main - Repair Complete";
			                 break;
                    case '0760':
                            code = "0760" ;
                            codetxt = "Altered Main - Planned";
			                break;
                    case '0770':
                            code = "0770" ;
                            codetxt = "Altered Service - Immediate";
			                break;
                    case '0780':
                            code = "0780" ;
                            codetxt = "Altered Service - Planned";
			                break;
                    case '0790':
                            code = "0790" ;
                            codetxt = "Abandoned Main - Immediate"; 
			                break;
                    case '0800':
                           code = "0800" ;
                           codetxt = "Abandoned Main - Planned";
			               break;
					case '0810':		
                            code = "0810" ;
                            codetxt = "Abandoned Service - Immediate";
			                 break;
                    case '0820':
                            code = "0820" ;
                            codetxt = "Abandoned Service - Planned";
			                break;
                     case '0650':
                             code = "0650" ;
                             codetxt = "Replace Main > 40 ft";
			                 break;
                    case '0490':
                            code = "0490" ;
                            codetxt = "Welded";
			                 break;
                    case '0670':
                            code = "0670" ;
                            codetxt = "Temporary Repair-Service";
			                break;
                    case '0680':
                            code = "0680" ;
                            codetxt = "Temporary Repair-Main";
			                break;
                    case '0220':
                            code = "0220" ;
                            codetxt = "Other";
			                break;
			        default:
							codegrp = "";
							codetyp = "";
							code =  "";
							codetxt = ""
							break;
							
				}
				
$(GV_XML).find('TYPE_REPAIRT').text(codetxt);
code = 0, codetxt = "", codetyp = "", codegrp = "";
//End of Type of Repair

//Start of Material
var MATERIAL = $("#Material").val();

switch(MATERIAL) 
				{
					case '6':		
                            code = "6" ;
                            codetxt = "Plastic - Polyethylene";
			                 break;
			
                    case '7':
                            code = "7" ;
                            codetxt = "Plastic - Other (PVC, Tenite, unk)";
			                break;
                    case '8':
                            code = "8" ;
                            codetxt = "Unknown/Not Exposed";
			                break;
                     case '3':
                             code = "3" ;
                             codetxt = "Steel-Bare w/CP";
			                 break;

                    case '4':
                            code = "4" ;
                            codetxt = "Steel-Bare w/o CP";
			                 break;
                    case '1':
                            code = "1" ;
                            codetxt = "Steel-Coated w/CP";
			                break;
                    case '2':
                            code = "2" ;
                            codetxt = "Steel-Coated-w/o CP";
			                break;
                    case '11':
                            code = "11" ;
                            codetxt = "Steel HP-Bare w/CP";
			                break;
                    case '12':
                            code = "12" ;
                            codetxt = "Steel HP-Bare w/o CP";
			                break;
                    case '9':
                           code = "9" ;
                           codetxt = "Steel HP-Coated w/CP";
			               break;
						   
						   
					case '10':		
                            code = "10" ;
                            codetxt = "Steel HP-Coated w/o CP";
			                 break;
			
                    case '5':
                            code = "5" ;
                            codetxt = "Other (Not Plastic)";
			                break;

                     
			        default:
							codegrp = "";
							codetyp = "";
							code =  "";
							codetxt = ""
							break;						
				}
				
$(GV_XML).find('MATERIAL').text(codetxt);
code = 0, codetxt = "", codetyp = "", codegrp = "";
//End of Material

//Start of Leak in
var LEAK_IN = $("#Leakin").val();


	//LEAK_IN
	switch(LEAK_IN) 
				{
					case '0220':		
                            code = "0220" ;
                            codetxt ="Pipe";
			                 break;
			
                    case '0070':
                            code = "0070" ;
                            codetxt ="Fitting";
			                break;
                    case '0080':
                            code = "0080" ;
                            codetxt ="Fitting body or seals – (Not in fusion)";
			                break;
                     case '0090':
                             code = "0090" ;
                             codetxt ="Fusion (Coupling)";
			                 break;

                    case '0100':
                            code = "0100" ;
                            codetxt ="Fusion (Elbow)";
			                 break;
                    case '0110':
                            code = "0110" ;
                            codetxt ="Fusion (Tapping Tee)";
			                break;
                    case '0120':
                            code = "0120" ;
                            codetxt ="Fusion (Reducer)";
			                break;
                    case '0130':
                            code = "0130" ;
                            codetxt ="Fusion (Tee-Inline)";
			                break;
                    case '0140':
                            code = "0140" ;
                            codetxt ="Fusion (End Cap)";
			                break;
                    case '0410':
                           code = "0410" ;
                           codetxt ="Fusion (Joint)";
			               break;
						   
						   
					case '0290':		
                            code = "0290" ;
                            codetxt ="Fusion (Service Saddle)";
			                 break;
			
                    case '0020':
                            code = "0020" ;
                            codetxt ="Fusion (Branch Saddle)";
			                break;
                    case '0160':
                            code = "0160" ;
                            codetxt ="Joint";
			                break;
                     case '0250':
                             code = "0250" ;
                             codetxt ="Riser";
			                 break;

                    case '0260':
                            code = "0260" ;
                            codetxt ="Anodeless Riser";
			                 break;
                    case '0400':
                            code = "0400" ;
                            codetxt ="Green/Black Sleeve AL Riser";
			                break;
                    case '0300':
                            code = "0300" ;
                            codetxt ="Supply Line Tap";
			                break;
                    case '0310':
                            code = "0310" ;
                            codetxt ="Transition Fitting";
			                break;
                    case '0330':
                            code = "0330" ;
                            codetxt ="Valve";
			                break;
                    case '0420':
                           code = "0420" ;
                           codetxt ="Mechanical Fitting (Remarks Required)";
			               break;
						   
				    case '0210':		
                            code = "0210" ;
                            codetxt ="Other (Remarks Required)";
			                 break;
			
                    case '0320':
                            code = "0320" ;
                            codetxt ="Unknown – Not exposed";
			                break;
                    

                     
			        default:
							codegrp = "";
							codetyp = "";
							code =  "";
							codetxt = ""
							break;
							
				}

$(GV_XML).find('LEAK_IN').text(codetxt);
code = 0, codetxt = "", codetyp = "", codegrp = "";
//End of Leak in

//Start of Pipe Size
var PIPE_SIZE  = $("#PipeSize").val();

	
	switch(PIPE_SIZE) 
				{
					case 'A':		
                            code = "A" ;
                            codetxt = "3/8'";
			                 break;
			
                    case 'B':
                            code = "B" ;
                            codetxt = "1/2' CTS";
			                break;
                    case 'C':
                            code = "C" ;
                            codetxt ="1/2' IPS";
			                break;
                     case 'D':
                             code = "D" ;
                             codetxt ="3/4'";
			                 break;

                    case 'E':
                            code = "E" ;
                            codetxt ="1'";
			                 break;
                    case 'F':
                            code = "F" ;
                            codetxt ="1 1/4'";
			                break;
                    case 'G':
                            code = "G" ;
                            codetxt ="1 1/2'";
			                break;
                    case 'H':
                            code = "H" ;
                            codetxt ="2'";
			                break;
                    case 'I':
                            code = "I" ;
                            codetxt ="3'";
			                break;
                    case 'J':
                           code = "J" ;
                           codetxt ="4'";
			               break;
						   
						   
					case 'K':		
                            code = "K" ;
                            codetxt ="6'";
			                 break;
			
                    case 'L':
                            code = "L" ;
                            codetxt ="6'+";
			                break;
                    case 'M':
                            code = "M" ;
                            codetxt ="8'";
			                break;
                     case 'N':
                             code = "N" ;
                             codetxt ="8'+";
			                 break;

                    case 'O':
                            code = "O" ;
                            codetxt ="10'";
			                 break;
                    case 'P':
                            code = "P" ;
                            codetxt ="10'+";
			                break;
                    case 'Q':
                            code = "Q" ;
                            codetxt ="12'";
			                break;
                    case 'R':
                            code = "R" ;
                            codetxt ="16'";
			                break;
                    case 'S':
                            code = "S" ;
                            codetxt ="20'";
			                break;
                    case 'T':
                           code = "T" ;
                           codetxt ="22'";
			               break;
						   
				    case 'U':		
                            code = "U" ;
                            codetxt ="24'";
			                 break;
			
                    case 'V':
                            code = "V" ;
                            codetxt ="30'";
			                break;
                    case 'W':
                            code = "W" ;
                            codetxt ="34'";
			                break;
                     case 'X':
                             code = "X" ;
                             codetxt ="36'";
			                 break;


                     
			        default:
							codegrp = "";
							codetyp = "";
							code =  "";
							codetxt = ""
							break;
					
				}

$(GV_XML).find('PIPE_SIZE').text(codetxt);
code = 0, codetxt = "", codetyp = "", codegrp = "";
//End of Pipe Size

//Start of Cause
var CAUSE  = $("#Cause").val();

//CAUSE
	
	switch(CAUSE) 
				{
					case '0020':		
                            code = "0020" ;
                            codetxt ="Construction Defect (Remarks Required)";
			                 break;
			
                    case '0030':
                            code = "0030" ;
                            codetxt ="Construction Defect – Compaction";
			                break;
                    case '0040':
                            code = "0040" ;
                            codetxt ="Construction Defect – Exc Bending/Strain";
			                break;
                     case '0050':
                             code = "0050" ;
                             codetxt ="Construction Defect – Joint (Fusion or Mech)";
			                 break;

                    case '0060':
                            code = "0060" ;
                            codetxt ="Construction Defect – Prior Damage Loc";
			                 break;
                    case '0070':
                            code = "0070" ;
                            codetxt ="Construction Defect - Rock";
			                break;
                    case '0080':
                            code = "0080" ;
                            codetxt ="Construction Defect - Sub-Structure";
			                break;
                    case '0110':
                            code = "0110" ;
                            codetxt ="Damaged by 3rd Party + ignition by static";
			                break;
                    case '0120':
                            code = "0120" ;
                            codetxt ="Damaged by Company Contractor";
			                break;
                    case '0130':
                           code = "0130" ;
                           codetxt ="Damaged by Company Crew";
			               break;
						   
						   
					case '0140':		
                            code = "0140" ;
                            codetxt ="Damaged by Natural Cause - Not Tree Root";
			                 break;
			
                    case '0150':
                            code = "0150" ;
                            codetxt ="Damaged by Third Party";
			                break;
                    case '0450':
                            code = "0450" ;
                            codetxt ="Damage- Earth Movement, Quake, Erosion, Etc";
			                break;
                     case '0160':
                             code = "0160" ;
                             codetxt ="Electrostatic Discharge-existing pipe";
			                 break;

                    case '0170':
                            code = "0170" ;
                            codetxt ="Electrostatic Discharge-new pipe";
			                 break;
                    case '0200':
                            code = "0200" ;
                            codetxt ="Material Defect (split seam, thin wall, etc)";
			                break;
                    case '0210':
                            code = "0210" ;
                            codetxt ="Material Failure – Unknown – not obvious";
			                break;
                    case '0230':
                            code = "0230" ;
                            codetxt ="Other (thread, coupling, clamp, valve stem, etc.)";
			                break;
                    case '0240':
                            code = "0240" ;
                            codetxt ="Prior Pinch/ Squeeze";
			                break;
                    case '0250':
                           code = "0250" ;
                           codetxt ="Tapping Tee Cap Cracked";
			               break;
						   
				    case '0260':		
                            code = "0260" ;
                            codetxt ="Tree Root- Damage";
			                 break;
			
                    case '0270':
                            code = "0270" ;
                            codetxt ="Unknown- Not Exposed";
			                break;
							
					case '0410':
                            code = "0410" ;
                            codetxt ="Corrosion – AG – anode not required";
			                break;
                    case '0420':
                            code = "0420" ;
                            codetxt ="Corrosion – Installed Anode";
			                break;
							
					case '0430':
                            code = "0430" ;
                            codetxt ="Corrosion- Anode not required";
			                break;
	                default:
							codegrp = "";
							codetyp = "";
							code =  "";
							codetxt = ""
							break;
							
				}
	
$(GV_XML).find('CAUSE').text(codetxt);
code = 0, codetxt = "", codetyp = "", codegrp = "";
//End of Cause

//Start of Soil Type
var SOIL_TYPE = $("#Soiltype").val();

//SOIL_TYPE


switch(SOIL_TYPE) 
				{
				case '1':		
                            code = "1" ;
                            codetxt ="Sandy"; 
			                 break;
			
                    case '2':
                            code = "2" ;
                            codetxt ="Rocky";
			                break;
                    case '3':
                            code = "3" ;
                            codetxt ="Clay";
			                break;
                     case '4':
                             code = "4" ;
                             codetxt ="Loam";
			                 break;
					
                    default:
							codegrp = "";
							codetyp = "";
							code =  "";
							codetxt = ""
							break;							
				}

$(GV_XML).find('SOIL_TYPE').text(codetxt);
code = 0, codetxt = "", codetyp = "", codegrp = "";
//End of Soil Type

//Start of Year Installed
var YEAR_INSTALLED = $("#year").val();

$(GV_XML).find('YEAR_INSTALLED').text(codetxt);
code = 0, codetxt = "", codetyp = "", codegrp = "";
//End of Year Installed

//Start of Soil Fitting Type
var FITTING_TYPE = $("#fittingtype").val();

				
//FITTING_TYPE				

switch(FITTING_TYPE) 
				{
					case '5':
                            code = "5" ;
                            codetxt = "Fusion Tapping Tee" ; 
			                 break;
					
					case '3':
                            code = "3" ;
                            codetxt = "Fusion Coupling" ;
			                break;
					case '6':
                            code = "6" ;
                            codetxt = "Fusion Reducer" ;
			                break;
                    case '4':
                             code = "4" ;
                             codetxt = "Fusion Elbow" ;
			                 break;
					case '7':
                            code = "7" ;
                            codetxt = "Fusion Tee-Inline" ;
			                break;
					case '8':
                            code = "8" ;
                            codetxt = "Fusion End Cap" ;
			                break;
					
					case '1':		
                            code = "1" ;
                            codetxt = "Branch Saddle" ;
			                 break;
			
			        case '11':		
                            code = "11" ;
                            codetxt = "Service Saddle" ;
			                 break;
			        case '13':
                            code = "13" ;
                            codetxt = "Mechanical Coupling" ;
			                break;
                    case '14':
                             code = "14" ;
                             codetxt = "Mechanical Elbow" ;
			                 break;
			        case '17':
                            code = "17" ;
                            codetxt = "Mechanical Reducer" ; 
			                break;
			
			        case '16':
                            code = "16" ;
                            codetxt = "Mechanical Tee-Inline" ;  
			                break;
					case '15':
                            code = "15" ;
                            codetxt = "Mechanical End Cap" ;
			                 break;
				    case '9':
                            code = "9" ;
                            codetxt = "Mechanical Fitting-Other" ;
			                break;
                    case '10':
                           code = "10" ;
                           codetxt = "Mechanical Tapping Tee" ;
			               break;
						   
			        case '2':
                            code = "2" ;
                            codetxt = "Excess Flow Valve" ;
			                break;
                    
					case '12':
                            code = "12" ;
                            codetxt = "Other" ;
			                break;

                     
			        default:
							codegrp = "";
							codetyp = "";
							code =  "";
							codetxt = ""
							break;
				}
	

$(GV_XML).find('FITTING_TYPE').text(codetxt);
code = 0, codetxt = "", codetyp = "", codegrp = "";
//End of Fitting Type

//Start of Fusion Type
var FUSION_TYPE  = $("#fusiontype").val();

//FUSION_TYPE
switch(FUSION_TYPE) 
				{
					
					
					
					case '1':		
                            code = "1" ;
                            codetxt = "Saddle Fusion ";
			                 break;
			
                    case '2':
                            code = "2" ;
                            codetxt = "Socket Fusion";
			                break;
                    case '3':
                            code = "3" ;
                            codetxt = "Butt Fusion";
			                break;
				    case '4':
                             code = "4" ;
                             codetxt = "Electro Fusion";
			                 break;
                     
			        default:
							codegrp = "";
							codetyp = "";
							code =  "";
							codetxt = ""
							break;
					
				}

$(GV_XML).find('FUSION_TYPE').text(codetxt);
code = 0, codetxt = "", codetyp = "", codegrp = "";
//End of Fusion Type

//Start of Riser Type
var RISER_TYPE   = $("#risertype").val();

//RISER_TYPE
switch(RISER_TYPE) 
				{
					
					case '1':		
                            code = "1" ;
                            codetxt = "Field Fab";
			                 break;
			
                    case '2':
                            code = "2" ;
                            codetxt = "Pre-fab";
			                break;
                    case '3':
                            code = "3" ;
                            codetxt = "Anodeless";
			                break;
				    case '4':
                             code = "4" ;
                             codetxt = "Stainless Steel";
			                 break;
					 case '5':
                            code = "5" ;
                            codetxt = "Riser Adapter";
			                 break;
                     
			        default:
							codegrp = "";
							codetyp = "";
							code =  "";
							codetxt = ""
							break;
				}
				

$(GV_XML).find('RISER_TYPE').text(codetxt);
code = 0, codetxt = "", codetyp = "", codegrp = "";
//End of Riser Type

//Start of Leak Position
var LEAK_POSITION  = $("#leakposition").val();

//LEAK_POSITION	
	  switch(LEAK_POSITION) 
				{
					case '1':		
                            code = "1" ;
                            codetxt = "Top";
			                 break;
			
                    case '2':
                            code = "2" ;
                            codetxt = "Bottom";
			                break;
                    case '3':
                            code = "3" ;
                            codetxt = "Side";
			                break;
                     
			        default:
							codegrp = "";
							codetyp = "";
							code =  "";
							codetxt = ""
							break;
		}
		
$(GV_XML).find('LEAK_POSITION').text(codetxt);
code = 0, codetxt = "", codetyp = "", codegrp = "";
//End of Leak Position

//Start of Rein Sleeve
var REIN_SLEEVE  = $("#reinforcingsleeve").val();

//REIN_SLEEVE


switch(REIN_SLEEVE) 
				{
					case '1':		
                            code = "1" ;
                            codetxt = "Omitted";
			                 break;
			
                    case '2':
                            code = "2" ;
                            codetxt = "Improperly Installed";
			                break;
                    case '3':
                            code = "3" ;
                            codetxt = "Altered";
			                break;
				    case '4':
                             code = "4" ;
                             codetxt = "Properly Installed";
			                 break;
					 case '5':
                            code = "5" ;
                            codetxt = "Not Required";
			                 break;             
			        default:
							codegrp = "";
							codetyp = "";
							code =  "";
							codetxt = ""
							break;
				}

$(GV_XML).find('CAUSE').text(codetxt);
code = 0, codetxt = "", codetyp = "", codegrp = "";
//End of Rein Sleeve

//Start of Installation Method
var INST_METHOD  = $("#installationmethod").val();

//INST_METHOD
switch(INST_METHOD) 
				{
					
					
					
					case '1':		
                            code = "1" ;
                            codetxt = "Direct Bury";
			                 break;
			
                    case '2':
                            code = "2" ;
                            codetxt = "Cut and Bore/HDD";
			                break;
                    case '3':
                            code = "3" ;
                            codetxt = "Joint Trench";
			                break;
				    case '4':
                             code = "4" ;
                             codetxt = "Insert";
			                 break;
					 case '5':
                            code = "5" ;
                            codetxt = "Pipe Split";
			                 break;
				    case '6':
                            code = "6" ;
                            codetxt = "Unknown";
			                break;
                     
			        default:
							codegrp = "";
							codetyp = "";
							code =  "";
							codetxt = ""
							break;		
				}

$(GV_XML).find('INST_METHOD').text(codetxt);
code = 0, codetxt = "", codetyp = "", codegrp = "";
//End of Installation Method

//Start of Manufacturer
var MANUFACTURER  = $("#Manufacturer").val();


switch(MANUFACTURER) 
				{
					case '1':		
                            code = "1" ;
                            codetxt = "DUPONT";
			                 break;
                    case '2':
                            code = "2" ;
                            codetxt = "PLEXCO";
			                break;
                    case '3':
                            code = "3" ;
                            codetxt = "UPONOR";
			                break;
                     case '4':
                             code = "4" ;
                             codetxt = "NIPAC";
			                 break;
                    case '5':
                            code = "5" ;
                            codetxt = "INNOGAZ";
			                 break;
                    case '6':
                            code = "6" ;
                            codetxt = "FRIATEC";
			                break;
                    case '7':
                            code = "7" ;
                            codetxt = "WAYNE";
			                break;
                    case '8':
                            code = "8" ;
                            codetxt = "NO STRESS";
			                break;
                    case '9':
                            code = "9" ;
                            codetxt = "R W LYALL";
			                break;
                    case '10':
                           code = "10" ;
                           codetxt = "CONTINENTAL";
			               break;
					case '11':		
                            code = "11" ;
                            codetxt = "PERFECTION";
			                 break;
                    case '12':
                            code = "12" ;
                            codetxt = "NORDSTROM";
			                break;
					case '13':
                            code = "13" ;
                            codetxt = "PERFORMANCE PIPE";
			                break;
                    case '14':
                             code = "14" ;
                             codetxt = "DRISCO (PHILLIPS)";
			                 break;
                    case '15':
                            code = "15" ;
                            codetxt = "POLYPIPE (RINKER)";
			                 break;
                    case '16':
                            code = "16" ;
                            codetxt = "CENTRAL PLASTICS";
			                break;
                    case '17':
                            code = "17" ;
                            codetxt = "U.S. POLY CO";
			                break;
                    case '18':
                            code = "18" ;
                            codetxt = "OTHER/UNKNOWN";
			                break;
			        default:
							codegrp = "";
							codetyp = "";
							code =  "";
							codetxt = ""
							break;							
				}

$(GV_XML).find('MANUFACTURER').text(codetxt);
code = 0, codetxt = "", codetyp = "", codegrp = "";
//End of Manufacturer

//Start of Shade
var SHADE     = $("#shade").val();

switch(SHADE) 
				{
					case '1':		
                            code = "1" ;
                            codetxt = "Import";
			                 break;
                    case '2':
                            code = "2" ;
                            codetxt = "Native";
			                break;
			        default:
							codegrp = "";
							codetyp = "";
							code =  "";
							codetxt = ""
							break;
				}

$(GV_XML).find('SHADE').text(codetxt);
code = 0, codetxt = "", codetyp = "", codegrp = "";
//End of Shade

//Start of Pipe Sample Taken
var PIPE_SAMP_TAKEN  = $("#pipesampletaken").val();

switch(PIPE_SAMP_TAKEN) 
				{					
					case '1':		
                            code = "1" ;
                            codetxt = "Sent to staff";
			                 break;
			
                    case '2':
                            code = "2" ;
                            codetxt = "Not removed (Remarks Required)";
			                break;
				    case '3':
                            code = "3" ;
                            codetxt = "Other (Remarks Required)";
			                break;
                
                     
			        default:
							codegrp = "";
							codetyp = "";
							code =  "";
							codetxt = ""
							break;
							
				}

$(GV_XML).find('PIPE_SAMP_TAKEN').text(codetxt);
code = 0, codetxt = "", codetyp = "", codegrp = "";
//End of Pipe Sample Taken

//Start of Back Fill Material
var BACK_FILL  = $("#BackFillMaterial").val();

switch(BACK_FILL) 
				{
					case '1':		
                            code = "1" ;
                            codetxt = "Sand";
			                 break;
			
                    case '2':
                            code = "2" ;
                            codetxt = "Rocky";
			                break;
                    case '3':
                            code = "3" ;
                            codetxt = "Adobe";
			                break;
				    case '4':
                             code = "4" ;
                             codetxt = "Clay";
			                 break;
					 case '5':
                            code = "5" ;
                            codetxt = "Loam";
			                 break;
				    case '6':
                            code = "6" ;
                            codetxt = "Slurry";
			                break;   
			        default:
							codegrp = "";
							codetyp = "";
							code =  "";
							codetxt = ""
							break;			
				}

$(GV_XML).find('BACK_FILL').text(codetxt);
code = 0, codetxt = "", codetyp = "", codegrp = "";
//End of Back Fill Material

//Start of Pipe Color
var PIPE_COLOR  = $("#pipecolor").val();

$(GV_XML).find('CAUSE').text(codetxt);
code = 0, codetxt = "", codetyp = "", codegrp = "";
//End of Pipe Color

//Start of Existing Pipe
var EXIST_PE_PIPE_LO = $("#ExistingPipe").val();

$(GV_XML).find('EXIST_PE_PIPE_LO').text(codetxt);
code = 0, codetxt = "", codetyp = "", codegrp = "";
//End of Existing Pipe

//Start of Recheck /*
/*var RECHECK_REQUIRED = $("# ").val();
var NEED_BY  = $("# ").val();
var NEW_PE_PIPE_LOT1 = $("# ").val();
var NEW_PE_PIPE_LOT2  = $("# ").val();
var REMARKS  = $("# ").val();
var codegrp, codetyp, code, codetxt; */


	strxml = (new XMLSerializer()).serializeToString(GV_XML);
	
	
	
	alert(strxml);
	gv_order = gv_order.replace(/^\s+|\s+$/g, '');
	alert(gv_order);
	
	
	localStorage.setItem("SaveOrd"+gv_order,strxml);
	
}




function LocalStorage()
{
	localStorage.removeItem("Local_Orders");
	
	var myXML1;
	
	 $.ajax({
                type : 'GET',
				url : 'http://anica.azurewebsites.net/WOList.asp?UID=vchittur&Status=N',
				dataType : "xml",
				success : function(data1) 
							{
								var myXML1 = data1;
								var i = 0;
								Ls_Ordxml = (new XMLSerializer()).serializeToString(data1);
								localStorage.setItem("OrdersXML",Ls_Ordxml);
								
							},
							
				error : function(a, b, c) 
							{
								alert('Unable to process your request. Please try again later');
                            }
			}).done(function()
   		 	       	{
   		 	       		LocalSOrdetails();
   		 	       	});
			i = 0;
			
	
			
}

function LocalSOrdetails()
{
	var i = 0;
	var myXML1 = textToXML(localStorage.getItem("OrdersXML"));
	$(myXML1).find("Order").each(function() 
		{
			var ProcID = $(this).attr("ProcID");
            var Status = $(this).attr("Status");
            var LV_Order_Num = $(this).text(); 
            LV_Order_Num = LV_Order_Num.replace(/^\s+|\s+$/g, '');;
            if(ProcID == "EMBM_LR_MI" && Status == "N")
            	{
                    var equrl = "http://anica.azurewebsites.net/WODetail.asp?ORDID=" + LV_Order_Num;
                    
                    Ls_Ord_List[i] = LV_Order_Num;
                    i = i + 1;
                    
                    $.ajax({
                			type : 'GET',
                			url : equrl,
                			dataType : "xml",
                			success : function(data) 
                						{
                			    			//alert(data);
											//var ord = $(data).find("ORD_NUM").text();
											//alert(ord);
											Ls_strxml = (new XMLSerializer()).serializeToString(data);
											//console.log("Order"+Ls_Order+" //  // "+Ls_strxml);
											localStorage.setItem(LV_Order_Num , Ls_strxml);
											Ls_strxml = 0;
										},
							error :	function(e)
										{
											var e1 = parseXml(e);
											alert(Ls_Order + " Load is Failed " + e1);
										}
   		 					});
                  
                }
            else
            	{
      
           		}
                                                  
        });
        
      
      var orders = Ls_Ord_List.toString();
      localStorage.setItem("Local_Orders",orders);
        
	//StoreEquip();
}

function Login()
{
     var Username = localStorage.getItem("Username");
     var Password = localStorage.getItem("Password");
     
     if((localStorage.getItem("SaveAccount") == "True") && (Username != "") && (Password != ""))
     {
         
         $("#username1").val(Username);
         $('#password1').val(Password);
         $("#remember1").is(":checked")
     }
     
     if( ($("username1").val() == Username) && ($('#password1').val() == Password)  )
     	{
     		status = "S";
     	}
     	
     else
     {
     
    	LUserId = encodeURIComponent($("#username1").val());
    	LPassWord = encodeURIComponent($('#password1').val());

    	var parameters = "EMAIL="+LUserId +"&PWD="+ LPassWord ;
                        	
    	jQuery.ajax({
                       type: "POST",
                       url: "http://anica.azurewebsites.net/auth/Logon.asp",
                       async: false,
                       data: parameters,
                       success: 
                            function(success)
                                {
                                    //alert(success);
                                    var suc = textToXML(success);
                                    var i = $(suc).find("STATUS").text();
                                    //alert(i);
                                    if(i==1)
                                        {
                                            
                                            //alert("Login Successful");
                                            status='S';
                                            localStorage.removeItem("Username");
                                            localStorage.removeItem("Password");
                                            
                                            return status;
                                        }
                                    else
                                        {
                                            alert("Login is Failed");
                                         }
                                 }
                                    
                  });
     }
}



function textToXML ( str ) 
	{
      try {
			var xml = null;

			if ( window.DOMParser ) 
			{

				var parser = new DOMParser();
				xml = parser.parseFromString( str, "text/xml" );

				var found = xml.getElementsByTagName( "parsererror" );

				if ( !found || !found.length || !found[ 0 ].childNodes.length ) 
					{
						return xml;
					}

				return null;
          
			} 
			else 
			{

				xml = new ActiveXObject( "Microsoft.XMLDOM" );

				xml.async = false;
				xml.loadXML( str );
				return xml;
			}
    
		}	 
  
		catch ( e ) 
		{
			// suppress
		}
  
   
	}




function UploadWeb()
{
	var data = localStorage.getItem("Local_Orders");
	if(data)
	{
		var Lv_Orders = data.split(",");

		for(i=0; i<Lv_Orders.length; i++)
			{
				var Orderno = Lv_Orders[i];
				Orderno.replace(/^\s+|\s+$/g, ''); 
				var Ls_Ord_name = "SaveOrd"+Orderno;
				var Ls_Ord_data = localStorage.getItem(Ls_Ord_name);
				if ( Ls_Ord_data )
				{
            			var url_RoleID = "WM";
            			var url_ProcID = "EMBM_LR_MI";
           	 			var url_DocID = Orderno;
            			var url_ItemID = "0";
            			var url_UserID = $("#username1").val();
            			var url_Status = "C";
     			
            			PURL = "http://anica.azurewebsites.net/update.asp?RoleID=" + encodeURIComponent(url_RoleID) + "&ProcID=" +
                    			encodeURIComponent(url_ProcID) + "&DocID=" +encodeURIComponent(url_DocID) + "&UserID=" +
                        			encodeURIComponent(url_UserID) + "&ItemID=" + encodeURIComponent(url_ItemID)+ "&Status=" +
                        				encodeURIComponent(url_Status);
                        				
                 		$.ajax({
                         
                         			url: PURL, //'http://anica.azurewebsites.net/update.asp?RoleID=CP10&ProcID=&DocID=510000076007&UserID=cmatha%40gmail.com',
                         			data: Ls_Ord_data,
                         			processData: false,
                         			contentType: false,
                         			type: 'POST',
                         			success: function(data)
                         				{
                         					alert("Response : "+data);
                         					localStorage.removeItem(Orderno);
                         					localStorage.removeItem(Ls_Ord_name);
                         				
                         				}
                         	  });
					} //end of if
                        
					else
					{
						//alert("No Data to Update");
					}
		} //end of for loop
	}//end of if
	else
	{
		alert("No Data to Update to Web Service");
	}
         
}

function Build_Orders()
{
	
	
					$('#order_list').children().remove('li');
					
                    var GV_Orders_XML = localStorage.getItem("OrdersXML");
                    
                    var myXML = GV_Orders_XML;
                    
                    if(myXML != null)
                    {
                    	//Build_Orders(myXML);
                    
            
						$(myXML).find("Order").each(function() 
                    		{
								var ProcID = $(this).attr("ProcID");
								var Status = $(this).attr("Status");
								//  console.log("ProcID: " + ProcID + "Status: " + Status);

								if ((ProcID == "EMBM_LR_MI") && (Status == "N" ))
						
								{
									$("#orders #order_list").append('<li data-theme="c"><a href="">' + $(this).text() + '</a></li>');
						
								}
               				});
               			
               	     }
                    
                    else
                    {
                    	alert("No data to display, Please Sync to get the data");
                    }
                    
                     $('#listview').listview('refresh');
}