const _0x21badf=_0x216e;function _0x216e(_0x18a4bd,_0x177036){const _0x275242=_0x2752();return _0x216e=function(_0x216eb0,_0x387281){_0x216eb0=_0x216eb0-0x175;let _0xd11bba=_0x275242[_0x216eb0];return _0xd11bba;},_0x216e(_0x18a4bd,_0x177036);}function _0x2752(){const _0x47705d=['1016682yRzreh','27PIrmgc','\x0a\x0a👥\x20*ꜰᴏʟʟᴏᴡᴇʀꜱ*:\x20','response','../command','log','other','THARU\x20','120363192254044294@newsletter','21820TqFzgb','94779062397@s.whatsapp.net','sendMessage','get','followers','location','*👨‍💻\x20THARU-ᴍᴅ\x20GITSTALK\x20👨‍💻*\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a👤\x20*ᴜꜱᴇʀ\x20ɴᴀᴍᴇ*:\x20','13841500DLwoLp','Not\x20available','103672yHwkNp','github','636ylFZqM','51qEfPyq','144656oiXawc','https://files.catbox.moe/3nugy4.jpeg','buffer','message','html_url','Fetch\x20detailed\x20GitHub\x20user\x20profile\x20including\x20profile\x20picture.','\x0a\x0a>\x20THARU-ᴍᴅ\x0a','\x0a\x0a🔭\x20*ᴘᴜʙʟɪᴄ\x20ɢɪꜱᴛꜱ*:\x20','public_repos','data','1152627kjcSoK','\x0a\x0a📊\x20*ᴘᴜʙʟɪᴄ\x20ʀᴇᴘᴏ*:\x20','Unknown','Please\x20provide\x20a\x20GitHub\x20username.',')\x0a\x0a📝\x20*ʙɪᴏ*:\x20','avatar_url','following','created_at','411039DpagFO','\x0a\x0a🔗\x20*ɢɪᴛʜᴜʙ\x20ᴜʀʟ*:('];_0x2752=function(){return _0x47705d;};return _0x2752();}(function(_0x4ed532,_0x52a420){const _0x22c337=_0x216e,_0x19055d=_0x4ed532();while(!![]){try{const _0x5a605d=parseInt(_0x22c337(0x183))/0x1+-parseInt(_0x22c337(0x185))/0x2+-parseInt(_0x22c337(0x19a))/0x3*(parseInt(_0x22c337(0x19b))/0x4)+parseInt(_0x22c337(0x18e))/0x5*(-parseInt(_0x22c337(0x199))/0x6)+parseInt(_0x22c337(0x17b))/0x7+parseInt(_0x22c337(0x197))/0x8*(-parseInt(_0x22c337(0x186))/0x9)+parseInt(_0x22c337(0x195))/0xa;if(_0x5a605d===_0x52a420)break;else _0x19055d['push'](_0x19055d['shift']());}catch(_0x420bea){_0x19055d['push'](_0x19055d['shift']());}}}(_0x2752,0x51d9c));const {cmd,commands}=require(_0x21badf(0x189)),axios=require('axios'),{Buffer}=require(_0x21badf(0x19d));cmd({'pattern':'githubstalk','alias':[_0x21badf(0x198)],'desc':_0x21badf(0x176),'category':_0x21badf(0x18b),'react':'📚','filename':__filename},async(_0x175893,_0x4fc4d2,_0x59eaf1,{from:_0x20c5b0,quoted:_0x4aa000,body:_0x2974b2,isCmd:_0x5311a4,command:_0x37ead3,args:_0x417346,q:_0x216fb8,isGroup:_0x40cdf8,sender:_0x46a36d,senderNumber:_0x4d884f,botNumber2:_0x54303a,botNumber:_0x110c4d,pushname:_0x2b7ce4,isMe:_0x5d1a90,isOwner:_0x1940d4,groupMetadata:_0x1325c5,groupName:_0x3a3327,participants:_0x20888b,groupAdmins:_0x43ea32,isBotAdmins:_0x2901a2,isAdmins:_0x3c3b78,reply:_0x13cfda})=>{const _0x1f452b=_0x21badf;try{const _0x52764b=_0x417346[0x0];if(!_0x52764b)return _0x13cfda(_0x1f452b(0x17e));const _0x15c42b='https://api.github.com/users/'+_0x52764b,_0x1fa020=await axios[_0x1f452b(0x191)](_0x15c42b),_0x59aceb=_0x1fa020[_0x1f452b(0x17a)];let _0x4fce05=_0x1f452b(0x194)+(_0x59aceb['name']||_0x59aceb['login'])+_0x1f452b(0x184)+_0x59aceb[_0x1f452b(0x175)]+_0x1f452b(0x17f)+(_0x59aceb['bio']||_0x1f452b(0x196))+'\x0a\x0a🏙️\x20*ʟᴏᴄᴀᴛɪᴏɴ*:\x20'+(_0x59aceb[_0x1f452b(0x193)]||_0x1f452b(0x17d))+_0x1f452b(0x17c)+_0x59aceb[_0x1f452b(0x179)]+_0x1f452b(0x187)+_0x59aceb[_0x1f452b(0x192)]+'\x20|\x20Following:\x20'+_0x59aceb[_0x1f452b(0x181)]+'\x0a\x0a📅\x20*ᴄʀᴇᴀᴛʀᴅ\x20ᴅᴀᴛᴇ*:\x20'+new Date(_0x59aceb[_0x1f452b(0x182)])['toDateString']()+_0x1f452b(0x178)+_0x59aceb['public_gists']+_0x1f452b(0x177);await _0x175893[_0x1f452b(0x190)](_0x20c5b0,{'image':{'url':_0x59aceb[_0x1f452b(0x180)]},'caption':_0x4fce05,'contextInfo':{'mentionedJid':[_0x1f452b(0x18f)],'groupMentions':[],'forwardingScore':0x1,'isForwarded':!![],'forwardedNewsletterMessageInfo':{'newsletterJid':_0x1f452b(0x18d),'newsletterName':'THARU-ᴍᴅ\x20✻','serverMessageId':0x3e7},'externalAdReply':{'title':'THARU\x20MD','body':_0x1f452b(0x18c),'mediaType':0x1,'sourceUrl':'https://github.com/sadiyamin','thumbnailUrl':_0x1f452b(0x19c),'renderLargerThumbnail':![],'showAdAttribution':!![]}}},{'quoted':_0x4fc4d2});}catch(_0x2dcd86){console[_0x1f452b(0x18a)](_0x2dcd86),_0x13cfda('Error\x20fetching\x20data🤕:\x20'+(_0x2dcd86[_0x1f452b(0x188)]?_0x2dcd86[_0x1f452b(0x188)]['data'][_0x1f452b(0x19e)]:_0x2dcd86[_0x1f452b(0x19e)]));}});