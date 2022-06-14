$(document).ready(function(){


	$("#btnAdd").click(function(){
		var roll_no = $("#roll_no").val();
		var name = $("#name").val();
		var subject_1 = parseInt($("#subject_1").val());
		var subject_2 = parseInt($("#subject_2").val());
		var subject_3 = parseInt($("#subject_3").val());

		alert(subject_1);
		console.log(subject_1);
		if(roll_no == ''){
			// alert("Enter roll_no");
			$("#roll_no").after("<div class='error'>Enter The Roll No</div>")


		}else if(name == ''){
			alert("Enter name");
		}
		else if(subject_1 == '' || isNaN(subject_1)){
			alert("Enter subject_1");
		}
		else if(subject_2 == '' || isNaN(subject_2)){
			alert("Enter subject_2");
		}
		else if(subject_3 == '' || isNaN(subject_3)){
			alert("Enter subject_3");
		}
		else{
			

			var total = subject_1 + subject_2 + subject_3;
			var tr = "<tr><td>"+roll_no+"</td><td>"+name+"</td><td>"+subject_1+"</td><td>"+subject_2+"</td><td>"+subject_3+"</td><td>"+total+"</td></tr>";
			
			$("#tblStuent tbody").append(tr);
		}
		


	});

	$("#btnClear").click(function(){
		$("#roll_no").val(' ');
		$("#name").val(' ');
		$("#subject_1").val(' ');
		$("#subject_2").val(' ');
		$("#subject_3").val(' ');
	});
	// alert("document is ready");
	// var table_data = $("#tableData").html();
	// alert(table_data);

	// $("#hide").click(function(){
	// 	$("#details").hide();
	// });

	// $("#show").click(function(){
	// 	$("#details").show();
	// });

	// $("#toggle").click(function(){
	// 	$("#details1").fadeToggle("slow");
	// });

	$("#section2").hide();
	$("#section3").hide();

	$("#next1").click(function(){
		$("#section1").hide();
		$("#section2").show();
		print();
	});

	$("#print").click(function(){
		$("#section3").show();
		$("#section2").hide();
		print();
	});

	$("#student_details").click(function(){
		$("#section2").hide();
		$("#section1").show();
	});

	$("#mark").click(function(){
		$("#section3").hide();	
		$("#section2").show();
	});

 //   function print(){
 //   	var name = $("#name").val();
 //   	var roll_no = $("#roll_no").val();
 //   	var sub1 = $("#sub1").val();
 //   	var sub2 = $("#sub2").val();
	// $("#print_name").text(name);
	// $("#print_roll_no").text(roll_no);
	// $("#print_sub1").text(sub1);
	// $("#print_sub2").text(sub2);

 //   }

});