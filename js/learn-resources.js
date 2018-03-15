$(document).ready(function(){
	$("#allergists").click(function(){
		$("#resourceInfo").html("<p>Hudson Allergy</p><br><a href='http://www.hudsonallergy.com'>http://www.hudsonallergy.com</a><br><br><h3>Tribeca</h3><h3>49 Murray Street</h3><h3>New York, NY 10007</h3><br><h3>Flatiron</h3><h3>208 5th Avenue</h3><h3>New York, NY 10010</h3>")
	});
	$("#allergyFriendly").click(function(){
		$("#resourceInfo").html("<p>Native Gardener's Companion</p><p>32115 Prarie Lane</p><p>Winona, MN 55987</p><br><a href='http://www.prairiemoon.com/native-gardeners-companion.html'>http://www.prairiemoon.com/native-gardeners-companion.html</a><br><br><ul><li>A good source for native milkweed and other pollinator seed</li></ul>")
	});
	$("#consultants").click(function(){
		$("#resourceInfo").html("<p>Peter Wynnyczuk</p><p>P & A Urban Forestry Consulting Ltd.</p><p>Richmond Hill, Ontario</p><p>Canada</p><p>Offers a wide range of professional arboriculture consulting and assesment services in Southern and Central Ontario</p><a href='www.paurbanforestryconsulting.com'>www.paurbanforestryconsulting.com</a>")
	});
	$("#architects").click(function(){
		$("#resourceInfo").html("<p>Jodie Cook Landscape Design</p><p>San Clemente, California</p><p>Telephone: 949-291-8003</p><a href='http://www.jodiecookdesign.com'>http://www.jodiecookdesign.com</a>")
	});
	$("#websites").click(function(){
		$("#resourceInfo").html("<p>AgroSci Inc. <a href='http://www.agrosci.com'>www.agrosci.com</a></p><br><p>AgroSci manufactures and installs exterior and interior living walls.</p>")
	})
})