$(document).ready(function(){
	// alert("document is ready");

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


   function print(){
   	var name = $("#name").val();
   	var roll_no = $("#roll_no").val();
   	var sub1 = $("#sub1").val();
   	var sub2 = $("#sub2").val();
	$("#print_name").text(name);
	$("#print_roll_no").text(roll_no);
	$("#print_sub1").text(sub1);
	$("#print_sub2").text(sub2);

   }
   
});