var tag=document.getElementById(ringID);for(i=0,thisSite=window.location.href,thisIndex=null;i<sites.length;i++)if(thisSite.startsWith(sites[i])){thisIndex=i;break}function randomSite(){(otherSites=sites.slice()).splice(thisIndex,1),randomIndex=Math.floor(Math.random()*otherSites.length),location.href=otherSites[randomIndex]}null==thisIndex?tag.insertAdjacentHTML("afterbegin",`
<table>
  <tr>
    <td>This site isn't part of the ${ringName} webring yet. You should talk to the manager to have your site added to the list!</td>
  </tr>
</table>
  `):(previousIndex=thisIndex-1<0?sites.length-1:thisIndex-1,nextIndex=thisIndex+1>=sites.length?0:thisIndex+1,indexText="",useIndex&&(indexText=`<a href='${indexPage}'>index</a> | `),randomText="",useRandom&&(randomText="<a href='javascript:void(0)' onclick='randomSite()'>random</a> | "),tag.insertAdjacentHTML("afterbegin",`
  <table>
    <tr>
      <td class='webring-prev'><a href='${sites[previousIndex]}'>← previous</a></td>
      <td class='webring-info'>This site is part of the ${ringName} webring</br>
      <span class='webring-links'>
        ${randomText}
        ${indexText}
        <a href='https://garlic.garden/onionring/'>what is this?</a></span></td>
      <td class='webring-next'><a href='${sites[nextIndex]}'>next →</a></td>
    </tr>
  </table>
  `));