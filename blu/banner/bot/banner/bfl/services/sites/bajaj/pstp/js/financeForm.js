var pageName,cookieID,clientId,pageURL,utm_source,utm_medium,utm_keyword,utm_campaign,utm_term,utm_content,loaderInterval="unassigned";function loaderFunction(e){0==$(".loaderCustom").length&&$("body").append('<div class="loaderCustom"><div id="text"><div class="loader"style="display:none;"></div><br><div id="text1">Loading</div><div id="text2"></div></div></div>'),1==e?($(".loaderCustom").fadeIn(),$(".loader").fadeIn(),$(".loaderCustom span").hide(),loaderInterval=setInterval(function(){$(".loaderCustom span").hide()},3e3)):($(".loaderCustom").fadeOut(),$(".loader").fadeOut(),clearInterval(loaderInterval),loaderInterval="unassigned")}function format(e,t,a){for(var o="",r=0,n=0;n<t.length&&r<e.length;n++)o+=e.substr(r,t[n]),r+t[n]<e.length&&(o+=a),r+=t[n];return o+=e.substr(r)}function captchaRelodad(){var e=new Date;$("#catpchaimg").attr("src","/BajajBranchLocator/captcha?a="+e.getTime())}function validateForm2(){var e=0;return""==$("#otp").val()?($("#otpFalse").html("Please enter otp"),e++):$("#otpFalse").html(""),e}function validateform(){var e=0,t=$("#mobNumb").val().replace(/-/g,""),a=$("#fName").val(),o=$("#captchaText").val(),r=($("#checkbox1").val(),$("#lName").val());return 0==$("#checkbox1").prop("checked")?($("#checkbox1False").html("Please accept the condition"),e++):$("#checkbox1False").html(""),""==a?($("#errorfName").html("Please enter first name"),e++):a.length<3?($("#errorfName").html("Please enter minimum 3 characters"),e++):/^[a-zA-Z]*$/g.test(a)?$("#errorfName").html(""):($("#errorfName").html("Only alphabets are allowed"),e++),""==r?($("#errorLName").html("Please enter last name"),e++):r.length<3?($("#errorLName").html("Please enter minimum 3 characters"),e++):/^[a-zA-Z]*$/g.test(r)?$("#errorLName").html(""):($("#errorLName").html("Only alphabets are allowed"),e++),""==t&&($("#mobileFalse").html("Please enter 10 digit mobile number"),e++),t.length>10?($("#mobileFalse").html("Please enter 10 digit mobile number"),e++):t.match(/^[0-9]+$/)?$("#mobileFalse").html(""):($("#mobileFalse").html("Only Numerics Allowed"),e++),""==o?($("#captchaFalse").html("Please enter captcha"),e++):$("#captchaFalse").html(""),e}function clearErrorMessage(){var e=$("#errorfName").val(),t=$("#mobileFalse").val(),a=$("#captchaFalse").val(),o=$("#checkbox1False").val(),r=$("#otpFalse").val(),n=$("#lName").val(),i=$("#errorLName").val();null!==e&&(""!==(l=$("#fName").val())&&/^[a-zA-Z]*$/g.test(l)&&null!==l&&$("#errorfName").html(""));if(null!==i){var l=$("#lName").val();""!==n&&/^[a-zA-Z]*$/g.test(n)&&null!==n&&$("#errorLName").html("")}if(null!==t){var m=$("#mobNumb").val().replace(/-/g,"");""!==m&&m.match(/^[0-9]+$/)&&null!==m&&$("#mobileFalse").html("")}if(null!==a){var s=$("#captchaText").val();""!==s&&null!==s&&$("#captchaFalse").html("")}if(null!==o&&1==$("#checkbox1").prop("checked")&&$("#checkbox1False").html(""),null!==r){var c=$("#otp").val();""!==c&&null!==c&&$("#otpFalse").html("")}}function sendOTP(){var e=$("#mobNumb").val().replace(/-/g,""),t=$("#fName").val(),a=$("#lName").val(),o=$("#captchaText").val(),r=($("#checkbox1").val(),$(window).width());device=r<600?"Mobile":r>640&&r<992?"tabet":"Desktop",device=device;var n=new Date,i=n.getFullYear()+"-"+(n.getMonth()+1)+"-"+n.getDate()+" "+(n.getHours()+":"+n.getMinutes()+":"+n.getSeconds()),l=GetCookie("LastClickCookie");l=JSON.parse(l);var m=GetCookie("campaignCookie");m=JSON.parse(m);var s=window.location.href,c=new URL(s);if(utm_source=c.searchParams.get("utm_source"),utm_medium=c.searchParams.get("utm_medium"),utm_keyword=c.searchParams.get("utm_keyword"),utm_campaign=c.searchParams.get("utm_campaign"),utm_term=c.searchParams.get("utm_term"),utm_content=c.searchParams.get("utm_content"),null!=utm_source||null!=utm_medium||null!=utm_keyword||null!=utm_campaign||null!=utm_term||null!=utm_content?(utm_campaign=null!=utm_campaign?utm_campaign:"NA",utm_medium=null!=utm_medium?utm_medium:"bfl",utm_keyword=null!=utm_keyword?utm_keyword:"NA",utm_source=null!=utm_source?utm_source:"organic_bfl",utm_term=null!=utm_term?utm_term:"NA",utm_content=null!=utm_content?utm_content:"NA",l=null):null!=m?(utm_campaign=m.utm_campaign,utm_medium=m.utm_medium,utm_keyword=m.utm_keyword,utm_source=m.utm_source):(utm_campaign="NA",utm_medium="bfl",utm_keyword="NA",utm_source="organic_bfl"),null==l?(l="NA",last_clicked_clicktrue=l):last_clicked_clicktrue=l.click,0===validateform()){loaderFunction(!0);e=$("#mobNumb").val().replace(/-/g,""),t=$("#fName").val(),a=$("#lName").val(),o=$("#captchaText").val(),$("#checkbox1").val();var u={ReqBody:{otpSource:"WEBSITE",mobile_number_mobileTrue:e,last_name:a,firstname_nameTrue:t,captchaText:o,utm_source_utmTrue:utm_source,utm_medium_utmTrue:utm_medium,utm_campaign_utmTrue:utm_campaign,Client_ID:clientId,Cookie_ID:cookieID,createon:i,device_True:device,PageURL_True:pageURL,last_clicked_clicktrue:last_clicked_clicktrue,pageName_form:pageName,formname_form:"PSTP Finance Home",form_Id:"PSTPWEB00001"}};loaderFunction(!0),$.ajax({url:"/BajajBranchLocator/sendOTP",type:"POST",contentType:"application/json",cache:!1,async:!0,data:JSON.stringify(u),error:function(e){loaderFunction(!1)},success:function(a){if("fail"==(a=JSON.parse(a)).status){$.each(a,function(e,t){"captchaText"==e&&$("#captchaFalse").html(t),"name"==e&&$("#errorfName").text(t),"lastname"==e&&$("#errorLName").text(t),"mobileno"==e&&$("#mobileFalse").text(t)});var o=new Date;$("#catpchaimg").attr("src","/BajajBranchLocator/captcha?a="+o.getTime())}else if("Please enter valid captcha"===a.result)$("#captchaFalse").html("Please enter valid captcha");else{o=new Date;$("#catpchaimg").attr("src","/BajajBranchLocator/captcha?a="+o.getTime()),$("#captchaFalse").html(""),$(".enterdmobile").html(e),$("#fName2").val(t),$(".form1").hide(),$(".form2").show(),$("#otp").val("");var r=59,n=setInterval(function(){$(".premodelCntinner").hide(),r--,$(".counter span").text(r+" Seconds"),0==r&&($(".resendotplink").show(),clearInterval(n))},1e3)}loaderFunction(!1)}})}}function uniqueId(){return"_"+Math.random().toString(36).substr(2,16)}function getCookie(e){var t=new RegExp("(?:^"+e+"|;s*"+e+")=(.*?)(?:;|$)","g").exec(document.cookie);return null===t?null:t[1]}if($(document).ready(function(){pageName=document.title,$("#mobNumb").keyup(function(){var e=$(this).val().replace(/-/g,"");e.length>0&&(e=format(e,[5],"-")),$(this).val(e)}),$("#mobNumb").change(function(){var e=$(this).val().replace(/-/g,"");e.length>0&&(e=format(e,[5],"-")),$(this).val(e)})}),-1==document.cookie.indexOf("userCookieID")){cookieID=uniqueId();var date=new Date,days=30;date.setTime(date.getTime()+24*days*60*60*1e3),document.cookie="userCookieID="+cookieID+";expires="+date.toGMTString()+"; path=/"}else cookieID=GetCookie("userCookieID");function checkAmount(e){var t,a;return a=(t=(e=e+""||"").split("."))[1]||null,t=t[0].replace(/(\d)(?=(\d\d)+\d$)/g,"$1,"),e=a?t+"."+a:t}function onlyNumber(e){var t=e.which?e.which:e.keyCode;return!(t>31&&(t<48||t>57))}function onlyAlphabets(e,t){try{if(window.event)var a=window.event.keyCode;else{if(!e)return!0;a=e.which}return a>64&&a<91||a>96&&a<123}catch(e){alert(e.Description)}}function formSubmit(){content_cta_click_IMP_PSTPPage_2(event,this),$("#MobileNo").val($("#mobNumb").val()),document.forms.frm.submit()}function resendOtp(){$(".resendotplink").hide();var e={ReqBody:{mobile_number_mobileTrue:$("#mobNumb").val().replace(/-/g,""),firstname_nameTrue:$("#fName").val(),otpSource:"WEBSITE"}};$.ajax({url:"/BajajBranchLocator/resendOtp",type:"POST",contentType:"application/json",cache:!1,async:!0,data:JSON.stringify(e),error:function(e){},success:function(e){$("#otp").val("");var t=59,a=setInterval(function(){$(".premodelCntinner").hide(),t--,$(".counter span").text(t+" Seconds"),0==t&&($(".resendotplink").show(),clearInterval(a))},1e3)}})}function resfreshPage(){location.reload()}function applyNowSubmit(e,t){var a=new Date,o=a.getDate()+""+(a.getMonth()+1)+a.getFullYear()+a.getHours()+a.getMinutes()+a.getSeconds()+a.getMilliseconds();console.log("unique_code : "+o);var r=$(t).parent(".applydiv2").parent(".docLonOffer2").data("interest"),n=GetCookie("CamapignForEVentHub"),i=GetCookie("pstpoffersCookie");if(i=JSON.parse(i),n=JSON.parse(n),null!=i&&null!=n){for(var l=i.offerResponse,m=l.offersDetails,s=0;s<m.length;s++){var c=m[s];(r=r.replace("-"," "))==c.offers&&(console.log("##########matched######### offers"),n.offer_id=c.offerId,n.offers=c.offers,n.amount=c.amount,n.product=c.product,n.productOfferingtype=c.productOfferingName,n.api_flag=c.flag)}n.interest_offers=r,n.unique_code=o,n.PSTPEventHubOffersResponse=l,n.form_Id="PSTPWEB00001",n.formname_form="PSTP Finance Home",console.log("PSTP Cookie    "+JSON.stringify(n)),eventHub_preApproved(JSON.stringify(n)),$.ajax({url:"/BajajBranchLocator/applyNow",type:"POST",contentType:"application/json",cache:!1,async:!0,data:JSON.stringify(n),error:function(e){},success:function(e){console.log("================= Success ================")}})}}function callingPstp2(){var e=$(".hiddenFlag").val(),t=$(".amountApi").val(),a=$("#fName").val();null!==a&&""!==a&&void 0!==a&&($("#api_firstname_prospect").val(a),$("#api_firstname_existing").val(a)),$("#api_amount_prospect").val(checkAmount(t)),$("#api_flag_prospect").val(e),$("#api_amount_existing").val(checkAmount(t)),$("#api_flag_existing").val(e),"E"===e?document.forms.frm2.submit():"V"!==e&&"P"!=e||document.forms.frm3.submit()}function callingSpectacleForm(){$("#spect_firstname").val($("#fName").val()),$("#spect_lastname").val($("#lName").val()),$("#spect_mobileNo").val($("#mobNumb").val()),document.forms.spectForm.submit()}function callingThankYou(e,t){var a=$(t).parent(".applydiv2").parent(".docLonOffer2").data("interest");$("#interestOffers").val(a),$("#flagApiThankYou").val($(".hiddenFlag").val()),$("#amountApiThankYou").val($(".amountApi").val()),null!==$("#fName").val()&&""!==$("#fName").val()&&void 0!==$("#fName").val()&&$("#FirstNameThankYou").val($("#fName").val()),document.forms.frm4.submit()}function createCookie(e,t,a){if(a){var o=new Date;o.setTime(o.getTime()+24*a*60*60*1e3);var r="; expires="+o.toGMTString()}else r="";document.cookie=e+"="+t+r+"; path=/"}function readCookie(e){for(var t=e+"=",a=document.cookie.split(";"),o=0;o<a.length;o++){for(var r=a[o];" "==r.charAt(0);)r=r.substring(1,r.length);if(0==r.indexOf(t))return r.substring(t.length,r.length)}return null}function eraseCookie(e){createCookie(e,"",-1)}function GetCookie(e){var t=document.cookie,a=t.indexOf(" "+e+"=");if(-1==a&&(a=t.indexOf(e+"=")),-1==a)t=null;else{a=t.indexOf("=",a)+1;var o=t.indexOf(";",a);-1==o&&(o=t.length),t=unescape(t.substring(a,o))}return t}function pstpofferscookie(e,t,a){var o=new Date;o.setTime(o.getTime()+9e5);var r={},n={},i={};n.offerResponse=t,i.offerName=e,r.preId=a,document.cookie="pstpoffersCookie=; expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="pstpNameCookie=; expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="pstpNameCookieId=; expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="pstpoffersCookie="+JSON.stringify(n)+";expires="+o.toGMTString()+"; path=/",document.cookie="pstpNameCookie="+JSON.stringify(i)+";expires="+o.toGMTString()+"; path=/",document.cookie="pstpNameCookieId="+JSON.stringify(r)+";expires="+o.toGMTString()+"; path=/"}ga(function(e){clientId=e.get("clientId")}),$(document).ready(function(){pageURL=window.location.href}),$("body").on("click",".closePreOfferModel1",function(e){e.preventDefault(),preapproved_offers_otp_mobile__Gtm(e,$(".closePreOfferModel1").text()),otp_submitGtm(e,this);var t=validateForm2(),a=$(window).width();device=a<600?"Mobile":a>640&&a<992?"tabet":"Desktop",device=device;var o=new Date,r=o.getFullYear()+"-"+(o.getMonth()+1)+"-"+o.getDate()+" "+(o.getHours()+":"+o.getMinutes()+":"+o.getSeconds()),n=$("#campaignFormCookie").val(),i=cookieID,l=clientId,m=GetCookie("LastClickCookie");m=JSON.parse(m);var s=GetCookie("campaignCookie");s=JSON.parse(s);var c=window.location.href,u=new URL(c);utm_source=u.searchParams.get("utm_source"),utm_medium=u.searchParams.get("utm_medium"),utm_keyword=u.searchParams.get("utm_keyword"),utm_campaign=u.searchParams.get("utm_campaign"),utm_term=u.searchParams.get("utm_term"),utm_content=u.searchParams.get("utm_content"),null!=utm_source||null!=utm_medium||null!=utm_keyword||null!=utm_campaign||null!=utm_term||null!=utm_content?(utm_campaign=null!=utm_campaign?utm_campaign:"NA",utm_medium=null!=utm_medium?utm_medium:"bfl",utm_keyword=null!=utm_keyword?utm_keyword:"NA",utm_source=null!=utm_source?utm_source:"organic_bfl",utm_term=null!=utm_term?utm_term:"NA",utm_content=null!=utm_content?utm_content:"NA",m=null):null!=s?(utm_campaign=s.utm_campaign,utm_medium=s.utm_medium,utm_keyword=s.utm_keyword,utm_source=s.utm_source):(utm_campaign="NA",utm_medium="bfl",utm_keyword="NA",utm_source="organic_bfl"),null==m?(m="NA",last_clicked_clicktrue=m):last_clicked_clicktrue=m.click;var d=$("#otp").val(),f=$("#mobNumb").val().replace(/-/g,""),h=$("#fName").val(),p=$("#lName").val(),v={ReqBody:{otpSource:"WEBSITE",otp:d,pageName_form:pageName,utm_source_utmTrue:utm_source,utm_medium_utmTrue:utm_medium,utm_campaign_utmTrue:utm_campaign,utm_keyword_utmTrue:utm_keyword,utm_term_utmTrue:utm_term,utm_content_utmTrue:utm_content,createon:r,campaignFormCookie:n,device_True:device,PageURL_True:pageURL,Cookie_ID:i,Client_ID:l,last_clicked_clicktrue:last_clicked_clicktrue,formname_form:"PSTP Finance Home",form_Id:"PSTPWEB00001",email_id:"true"}},_={mobile_number_mobileTrue:f,firstname_nameTrue:h,last_name:p,pageName_form:pageName,utm_source_utmTrue:utm_source,utm_medium_utmTrue:utm_medium,utm_campaign_utmTrue:utm_campaign,utm_keyword_utmTrue:utm_keyword,utm_term_utmTrue:utm_term,utm_content_utmTrue:utm_content,createon:r,campaignFormCookie:n,device_True:device,PageURL_True:pageURL,Cookie_ID:i,Client_ID:l,last_clicked_clicktrue:last_clicked_clicktrue,formname_form:"PSTP Finance Home Page Form",form_Id:"PSTPWEB00001",otpSource:"WEBSITE"};0===t&&(loaderFunction(!0),$.ajax({url:"/BajajBranchLocator/validateOTP",type:"POST",data:JSON.stringify(v),contentType:"application/json",cache:!1,async:!0,error:function(e){loaderFunction(!1)},success:function(e){if(loaderFunction(!1),"fail"==(e=JSON.parse(e)).status)$.each(e,function(e,t){"otp"==e&&$("#otpFalse").html(t)});else if("OTP NUMBER DO NOT MATCH"===e.result)$("#otpFalse").html("You have entered wrong otp");else if("Data is not available in system for entered mobile Number"===e.result){var t=$("#fName").val();eventHub_preApproved(JSON.stringify(_)),createCookie("CamapignForEVentHub",JSON.stringify(_),1);var a=GetCookie("pstpoffersCookie");a=JSON.parse(a);t=$("#fName").val();null==a&&pstpofferscookie(t,e,""),$(".mustsee_title").children("h2").html("Thank you for your interest in our products."),$("#title").html("Welcome to Bajaj Finserv, <span id='appendFname'></span>"),$("#appendFname").html($("#fName").val()).css("text-transform","capitalize"),$(".dummy").hide(),$(".errormsg2").hide(),$("#no-offers-message").html("Currently, we do not have offers for you"),$("#no-offers-cards").show(),$(".hOurFinOfTabs .no-offers-li").addClass("active").show(),$(".preapproveddiv").show(),$(".preApprvedSec .container").removeClass("blurSec"),$(".premodelCntinner").hide(),$(".premodelCntinner1").addClass("animated slideOutUp"),setTimeout(function(){$(".premodelCntinner1").hide(),$(".preAppOfferModel").hide()},400)}else{t=$("#fName").val();var o=e.offersDetails;$("#offersList").val(JSON.stringify(o)),eventHub_preApproved(JSON.stringify(_)),createCookie("CamapignForEVentHub",JSON.stringify(_),1);a=GetCookie("pstpoffersCookie");a=JSON.parse(a);t=$("#fName").val();null==a&&pstpofferscookie(t,e,""),$("#title").html("Hi <span id='appendFname'></span>, we have these pre-approved offers for you"),$("#appendFname").html($("#fName").val()).css("text-transform","capitalize"),$(".preapproveddiv").show(),$(".preApprvedSec .container").removeClass("blurSec"),$(".premodelCntinner").hide(),$(".premodelCntinner1").addClass("animated slideOutUp"),setTimeout(function(){$(".premodelCntinner1").hide(),$(".preAppOfferModel").hide()},400),offersList=[];for(var r=0;r<o.length;r++){var n=o[r];if(n.hasOwnProperty("offers")){var i=n.offers.replace(/\s+/g,"-");if("EMI Card"===n.offers&&("E"!==n.flag&&"P"!==n.flag||offersList.push("EMI-Finance")),offersList.push(i),$(".Wallet-Protect-li").show(),$(".Wallet-Protect").show(),"EMI Card"===n.offers){var l=n.flag,m=n.amount;$(".hiddenFlag").val(l),$(".amountApi").val(m),"E"===n.flag?($(".Spectacle-Insurance-li").show(),$(".Spectacle-Insurance").show(),$(".Key-Replacement").show(),$(".EMI-Finance-li").show(),$(".EMI-Finance").show(),$(".EMI-Finance").find("#amount").html("Rs."+checkAmount(n.amount)),$("."+i+"-li").show(),$("."+i).show(),$(".dummy").hide(),$(".errormsg2").hide(),$("."+i).find(".applynow").hide(),$("."+i).find(".buynow").show(),$("."+i).find(".view").show(),$("."+i).find(".discover").hide(),$("."+i).find("#amount").html("Rs."+checkAmount(n.amount)),$("."+i).find("#offers").html("EMI Network Card"),$("."+i).find(".card1").html("Shop for electronics, apparel, healthcare services and more on EMIs. Avail your offer at our partner stores.")):"V"===n.flag?($(".hOurFinOfTabs ."+i+"-li").show(),$("."+i).show(),$(".dummy").hide(),$("."+i).find(".errormsg2").hide(),$("."+i).find(".applynow").show(),$("."+i).find(".buynow").hide(),$("."+i).find(".view").show(),$("."+i).find(".discover").hide(),$("."+i).find("#amount").html("Rs."+checkAmount(n.amount)),$("."+i).find("#offers").html("EMI Network Card"),$("."+i).find(".card1").html("Shop for electronics, apparel, healthcare services and more on EMIs. Avail your offer at our partner stores . ")):"P"===n.flag&&($(".EMI-Finance-li").show(),$(".EMI-Finance").show(),$(".EMI-Finance").find("#amount").html("Rs."+checkAmount(n.amount)),$("."+i+"-li").show(),$("."+i).show(),$(".dummy").hide(),$("."+i).find(".errormsg2").hide(),$("."+i).find(".applynow").show(),$("."+i).find(".buynow").hide(),$("."+i).find(".view").hide(),$("."+i).find(".discover").hide(),$("."+i).find("#amount").html("Rs."+checkAmount(n.amount)),$("."+i).find("#offers").html("EMI Network Card"),$("."+i).find(".card1").html("Shop for electronics, apparel, healthcare services and more on EMIs. Avail your offer at our partner stores. "))}else"E"===n.flag?($("."+i+"-li").show(),$("."+i).show(),$(".dummy").hide(),$(".errormsg2").hide(),$("."+i).find(".applynow").hide(),$("."+i).find(".buynow").show(),$("."+i).find(".view").show(),$("."+i).find(".discover").hide(),$("."+i).find("#amount").html("Rs."+checkAmount(n.amount))):"V"===n.flag||"P"===l?($("."+i+"-li").show(),$("."+i).show(),$(".dummy").hide(),$("."+i).find(".errormsg2").hide(),$("."+i).find(".applynow").show(),$("."+i).find(".buynow").hide(),$("."+i).find(".view").show(),$("."+i).find(".discover").hide(),$("."+i).find("#amount").html("Rs."+checkAmount(n.amount))):"P"===n.flag&&($("."+i+"-li").show(),$("."+i).show(),$(".dummy").hide(),$("."+i).find(".errormsg2").hide(),$("."+i).find(".applynow").show(),$("."+i).find(".buynow").hide(),$("."+i).find(".view").hide(),$("."+i).find(".discover").hide(),$("."+i).find("#amount").html("Rs."+checkAmount(n.amount)))}}offersList.length>1?($(".hot-offers-li").show(),$(".EMI-Card-li").show(),$(".hotoffers").show(),$(".newslick").slick("unslick"),$(".newslick").slick("refresh")):($(".EMI-Card-li").show().addClass("active"),$("#preapp1").addClass("active"))}}}))}),$(document).ready(function(){$(".tab-selector").click(function(){var e=$(this).attr("class");"tab-selector hot-offers-li"===e?($(".hotoffers").show(),$(".newslick1").removeClass("active")):"tab-selector hot-offers-li active"===e?($(".hotoffers").show(),$(".newslick1").removeClass("active")):$(".hotoffers").hide()})}),$(document).ready(function(){var e=GetCookie("pstpoffersCookie");e=JSON.parse(e);var t,a=GetCookie("pstpNameCookie");if(a=JSON.parse(a),console.log("############# pstpNameCookie ############"+a),null!=a&&null!=e&&(null!=a&&(t=a.offerName,$("#firstname").html("Hi "+t+",")),null!=e)){var o=e.offerResponse;if("Data is not available in system for entered mobile Number"===o.result)$("#title").html("Welcome to Bajaj Finserv, <span id='appendFname'></span>"),$("#appendFname").html(t).css("text-transform","capitalize"),$(".dummy").hide(),$(".errormsg2").hide(),$(".applynow").hide(),$(".buynow").hide(),$(".view").hide(),$(".discover").show(),$("#no-offers-message").html("Thank you for your interest in our products. Currently, we do not have offers for you"),$("#no-offers-cards").show(),$(".hOurFinOfTabs .no-offers-li").addClass("active").show(),$(".preapproveddiv").show(),$(".preApprvedSec .container").removeClass("blurSec"),$(".premodelCntinner").hide(),$(".banner_form").addClass("slideOutLeft"),setTimeout(function(){$(".banner_form").hide(),$(".mustsee").show(0).addClass("slideInRight"),$(".newslick").slick("refresh")},0),$("#preapp11").addClass("newslick"),sliderInit(),$(".newslick").slick("unslick"),$(".newslick").slick("refresh");else{var r=o.offersDetails;$("#offersList").val(JSON.stringify(r)),$("#title").html("Hi <span id='appendFname'></span>, we have these pre-approved offers for you"),$("#appendFname").html(t).css("text-transform","capitalize"),$("#api_firstname_prospect").val(t),$("#api_firstname_existing").val(t),$("#FirstNameThankYou").val(t),$(".preapproveddiv").show(),$(".preApprvedSec .container").removeClass("blurSec"),$(".premodelCntinner").hide(),$(".premodelCntinner1").addClass("animated slideOutUp"),setTimeout(function(){$(".premodelCntinner1").hide(),$(".preAppOfferModel").hide()},400),offersList=[];for(var n=0;n<r.length;n++){var i=r[n];if(i.hasOwnProperty("offers")){var l=i.offers.replace(/\s+/g,"-");if("EMI Card"===i.offers&&("E"!==i.flag&&"P"!==i.flag||offersList.push("EMI-Finance")),offersList.push(l),$(".Wallet-Protect-li").show(),$(".Wallet-Protect").show(),"EMI Card"===i.offers){var m=i.flag,s=i.amount;$(".hiddenFlag").val(m),$(".amountApi").val(s),"E"===i.flag?($(".Spectacle-Insurance-li").show(),$(".Spectacle-Insurance").show(),$(".Key-Replacement").show(),$(".EMI-Finance-li").show(),$(".EMI-Finance").show(),$(".EMI-Finance").find("#amount").html("Rs."+checkAmount(i.amount)),$("."+l+"-li").show(),$("."+l).show(),$(".dummy").hide(),$(".errormsg2").hide(),$("."+l).find(".applynow").hide(),$("."+l).find(".buynow").show(),$("."+l).find(".view").show(),$("."+l).find(".discover").hide(),$("."+l).find("#amount").html("Rs."+checkAmount(i.amount)),$("."+l).find("#offers").html("EMI Network Card"),$("."+l).find(".card1").html("Shop for electronics, apparel, healthcare services and more on EMIs. Avail your offer at our partner stores.")):"V"===i.flag?($(".hOurFinOfTabs ."+l+"-li").show(),$("."+l).show(),$(".dummy").hide(),$("."+l).find(".errormsg2").hide(),$("."+l).find(".applynow").show(),$("."+l).find(".buynow").hide(),$("."+l).find(".view").show(),$("."+l).find(".discover").hide(),$("."+l).find("#amount").html("Rs."+checkAmount(i.amount)),$("."+l).find("#offers").html("EMI Network Card"),$("."+l).find(".card1").html("Shop for electronics, apparel, healthcare services and more on EMIs. Avail your offer at our partner stores . ")):"P"===i.flag&&($(".EMI-Finance-li").show(),$(".EMI-Finance").show(),$(".EMI-Finance").find("#amount").html("Rs."+checkAmount(i.amount)),$("."+l+"-li").show(),$("."+l).show(),$(".dummy").hide(),$("."+l).find(".errormsg2").hide(),$("."+l).find(".applynow").show(),$("."+l).find(".buynow").hide(),$("."+l).find(".view").hide(),$("."+l).find(".discover").hide(),$("."+l).find("#amount").html("Rs."+checkAmount(i.amount)),$("."+l).find("#offers").html("EMI Network Card"),$("."+l).find(".card1").html("Shop for electronics, apparel, healthcare services and more on EMIs. Avail your offer at our partner stores. "))}else"E"===i.flag?($("."+l+"-li").show(),$("."+l).show(),$(".dummy").hide(),$(".errormsg2").hide(),$("."+l).find(".applynow").hide(),$("."+l).find(".buynow").show(),$("."+l).find(".view").show(),$("."+l).find(".discover").hide(),$("."+l).find("#amount").html("Rs."+checkAmount(i.amount))):"V"===i.flag||"P"===m?($("."+l+"-li").show(),$("."+l).show(),$(".dummy").hide(),$("."+l).find(".errormsg2").hide(),$("."+l).find(".applynow").show(),$("."+l).find(".buynow").hide(),$("."+l).find(".view").show(),$("."+l).find(".discover").hide(),$("."+l).find("#amount").html("Rs."+checkAmount(i.amount))):"P"===i.flag&&($("."+l+"-li").show(),$("."+l).show(),$(".dummy").hide(),$("."+l).find(".errormsg2").hide(),$("."+l).find(".applynow").show(),$("."+l).find(".buynow").hide(),$("."+l).find(".view").hide(),$("."+l).find(".discover").hide(),$("."+l).find("#amount").html("Rs."+checkAmount(i.amount)))}}offersList.length>1?($(".hot-offers-li").show(),$(".EMI-Card-li").show(),$(".hotoffers").show(),$(".newslick").slick("unslick"),$(".newslick").slick("refresh")):($(".EMI-Card-li").show().addClass("active"),$("#preapp1").addClass("active"))}}});
      
/* 17Sep2018 6:56PM */     