function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5suBGAjdHwf":
        Script1();
        break;
      case "66GNBIGlBqo":
        Script2();
        break;
      case "6aajwD0huyq":
        Script3();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  const target = object('66ZsrV68rk3');
const duration = 750;
const easing = 'ease-out';
const id = '62fS1eyA5HQ';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

};
