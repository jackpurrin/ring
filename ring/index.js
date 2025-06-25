var tag=document.getElementById("index");for(i=0,regex=/^https:\/\/|\/$/g,list="";i<sites.length;i++)list+=`<li><a href='${sites[i]}'>${sites[i].replace(regex,"")}</a></li>`;tag.insertAdjacentHTML("afterbegin",`
<ul>
${list}
</ul>
`);