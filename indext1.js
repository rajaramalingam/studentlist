$(document).ready(function(){
 $.ajax({
 	type:"GET",
 	dataType:"json",
  	url:"http://59d87143b28c460012b38950.mockapi.io/students",
  	success:function(result){
  			var a ="";
  		for ( i = 0; i <result.length; i++) {
  		 a = a +"<tr><td>"+result[i].name+"</td><td>"+result[i].age+"</td><td>"+result[i].school+"</td></tr>";
  		}
  		$("#tab").html(a);
  	}
 })
 $("button").click(function(){
		var students={
			name:$("#name").val(),
			age:$("#age").val(),
			school:$("#school").val()
		}
	$.post("http://59d87143b28c460012b38950.mockapi.io/students",students,function(){
		$("#tab").append("<tr><td>"+students.name+"</td><td>"+students.age+"</td><td>"+students.school+"</td></tr>");
	})

});
});


	