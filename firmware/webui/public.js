function getcookie(name)
{
	var strCookie=document.cookie;
    var arrCookie=strCookie.split('; ');
    for (var i=0;i<arrCookie.length;i++)
    {
		var arr=arrCookie[i].split('=');
        if (arr[0]==name)
			return unescape(arr[1]);
    }
    return '';
}
function setcookie(name,value,expirehours)
{
	var cookieString=name+'='+escape(value);
    if (expirehours>0)
    {
		var date=new Date();
        date.setTime(date.getTime()+expirehours*3600*1000);
        cookieString=cookieString+'; expires='+date.toGMTString();
	}
    document.cookie=cookieString;
}
function showerror(camera,msg,err)
{
	var err_info;
	switch(err)
	{
	case 0:
		err_info='';
		break;
	case -1:
		err_info=str_err_connect;
		break;
	case -2:
		err_info=str_err_socket;
		break;
	case -3:
		err_info=str_err_timeout;
		break;
	case -4:
		err_info=str_err_version;
		break;
	case -5:
		err_info=str_err_cancel;
		break;
	case -6:
		err_info=str_err_closed;
		break;
	case -8:
		err_info=str_err_file;
		break;
	case -9:
		err_info=str_err_param;
		break;
	case -10:
		err_info=str_err_thread;
		break;
	case -11:
		err_info=str_err_status;
		break;
	case -12:
		err_info=str_err_id;
		break;
	case 1:
		err_info=str_fail_user;
		break;
	case 2:
		err_info=str_fail_maxconns;
		break;
	case 3:
		err_info=str_fail_version;
		break;
	case 4:
		err_info=str_fail_id;
		break;
	case 5:
		err_info=str_fail_pwd;
		break;
	case 6:
		err_info=str_fail_pri;
		break;
	case 7:
		err_info=str_fail_unsupport;
		break;	
	case 8:
		err_info=str_fail_forbidden;
		break;	
	default:
		err_info=str_err_unknown;
		break;
	}
	if (camera=='')
		alert(msg+' : '+err_info);
	else
		alert(camera+' : '+msg+' : '+err_info);
}