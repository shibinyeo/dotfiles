define(["core/Logger","core/API"],function(Logger,API){return{initAPI:function(API){API.mixin("Date",this)},parseMilitaryTime:function(militaryTime){var militaryTime=militaryTime.split(":"),hour=parseInt(militaryTime[0],10),militaryTime=parseInt(militaryTime[1],10),ampm=12<=hour?"pm":"am",hour=0===(hour=12<=hour?hour-12:hour)?12:hour,ampmString="pm"==ampm?API.Chrome.Translation.get("timePM"):API.Chrome.Translation.get("timeAM");return{hour:this.toTwoDigits(hour),min:this.toTwoDigits(militaryTime),ampm:ampm,display:hour+":"+this.toTwoDigits(militaryTime)+" "+ampmString}},timestampToDisplayDate:function(timestamp){var timestamp=new Date(timestamp),dateObj={};return dateObj.month=timestamp.getMonth()+1,dateObj.day=timestamp.getDate(),dateObj.year=timestamp.getFullYear(),dateObj.hours=timestamp.getHours(),dateObj.minutes=timestamp.getMinutes(),dateObj.month=this.toTwoDigits(dateObj.month),dateObj.day=this.toTwoDigits(dateObj.day),dateObj.minutes=this.toTwoDigits(dateObj.minutes),dateObj.ampm=12<=dateObj.hours?API.Chrome.Translation.get("timePM"):API.Chrome.Translation.get("timeAM"),dateObj.hours=12<dateObj.hours?dateObj.hours-12:dateObj.hours,0===dateObj.hours&&(dateObj.hours=12,dateObj.ampm=API.Chrome.Translation.get("timeAM")),dateObj},hasTimePassed:function(hour,min,ampm,nowDate){hour="pm"===ampm?parseInt(hour,10)+12:hour;ampm=(nowDate=nowDate||new Date).toDateString();return new Date(ampm+" "+hour+":"+min)<nowDate},secondsUntilTime:function(hour,min,ampm,nowDate){hour="pm"===ampm?parseInt(hour,10)+12:hour;ampm=(nowDate=nowDate||new Date).toDateString(),ampm=new Date(ampm+" "+hour+":"+min).getTime()-nowDate.getTime();return Math.floor(ampm/1e3)},minutesUntilTime:function(hour,min,ampm,nowDate){hour=this.secondsUntilTime(hour,min,ampm,nowDate);return Math.floor(hour/60)},getTodayDateObj:function(hour,min,ampm,nowDate){hour="pm"===ampm?parseInt(hour,10)+12:hour;ampm=(nowDate=nowDate||new Date).toDateString();return new Date(ampm+" "+hour+":"+min)},hoursToMilliseconds:function(hours){return 60*parseFloat(hours)*60*1e3},timeUnitToMilliseconds:function(num,unit){if(this.isValidTimeUnit(unit))return num=parseFloat(num),this.isValidHourUnit(unit)?60*num*60*1e3:this.isValidMinUnit(unit)?60*num*1e3:this.isValidSecUnit(unit)?1e3*num:num;throw new Error('[DateUtils.timeUnitToMilliseconds()] Could not convert time unit to milliseconds. "'+unit+'" is not a valid time unit.')},isValidTime:function(time,format){if("string"!=typeof time||2!==time.indexOf(":")||5!==time.length)return!1;format=12===format?12:24;var time=time.split(":"),hour=parseInt(time[0]),time=parseInt(time[1]);return 0<=time&&time<=59&&(12===format&&1<=hour&&hour<=12||24===format&&0<=hour&&hour<=23)},isValidTimeUnit:function(unit){return this.isValidHourUnit(unit)||this.isValidMinUnit(unit)||this.isValidSecUnit(unit)||this.isValidMSUnit(unit)},isValidHourUnit:function(unit){return"string"==typeof unit&&(0===unit.indexOf("hour")||0===unit.indexOf("hr")||"h"===unit)},isValidMinUnit:function(unit){return"string"==typeof unit&&(0===unit.indexOf("min")||"m"===unit)},isValidSecUnit:function(unit){return"string"==typeof unit&&(0===unit.indexOf("sec")||"s"===unit)},isValidMSUnit:function(unit){return"string"==typeof unit&&(0===unit.indexOf("millis")||"ms"===unit)},dayNumToDay:function(dayNum,abbreviated){if(dayNum<0||6<dayNum)throw new Error("[DateUtils.dayNumToDay()] Day num must be between 0 and 6");return(!0===abbreviated?["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"])[dayNum]},getDaysInMonth:function(month,year){var todayDate=new Date;return month=month||todayDate.getMonth(),year=year||todayDate.getYear(),32-new Date(year,month,32).getDate()},secondsToMinsAndSecs:function(totalSeconds){return totalSeconds/60===Math.floor(totalSeconds/60)?totalSeconds/60+" minutes":Math.floor(totalSeconds/60)+" minutes and "+(totalSeconds-60*Math.floor(totalSeconds/60))+" seconds"},toTwoDigits:function(num){return num<10?"0"+num:num},getYMD:function(date){date=date||new Date;var month=this.toTwoDigits(date.getMonth()+1),day=this.toTwoDigits(date.getDate());return date.getFullYear()+"-"+month+"-"+day}}});