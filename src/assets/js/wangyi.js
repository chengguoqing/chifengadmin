import store from '@/store.js'
var data = {}
export function init() { //初始化网易云
    store.state.nim = new NIM({
        // 初始化SDK
        // debug: true
        appKey: 'e0fbf0dd165f5b9d93da2c17ad0e72fc',
        account: 'o665p2sdo',
        token: 'f478417c0f8e2fdeaa5235d12859430d',
        onconnect: onConnect,
        onerror: onError,
        onwillreconnect: onWillReconnect,
        ondisconnect: onDisconnect,
        // 多端
        onloginportschange: onLoginPortsChange,
        // 用户关系
        onblacklist: onBlacklist,
        onsyncmarkinblacklist: onMarkInBlacklist,
        onmutelist: onMutelist,
        onsyncmarkinmutelist: onMarkInMutelist,
        // 好友关系
        onfriends: onFriends,
        onsyncfriendaction: onSyncFriendAction,
        // 用户名片
        onmyinfo: onMyInfo,
        onupdatemyinfo: onUpdateMyInfo,
        onusers: onUsers,
        onupdateuser: onUpdateUser,
        // 超大群
        onSuperTeams: onSuperTeams,
        onSyncCreateSuperTeam: onSyncCreateSuperTeam,
        onDismissSuperTeam: onDismissSuperTeam,
        onUpdateSuperTeamMember: onUpdateSuperTeamMember,
        onUpdateSuperTeam: onUpdateSuperTeam, // 更新超大群的回调
        onAddSuperTeamMembers: onAddSuperTeamMembers, // 新成员入超大群的回调
        onRemoveSuperTeamMembers: onRemoveSuperTeamMembers,
        // 群组
        onteams: onTeams,
        onsynccreateteam: onCreateTeam,
        onteammembers: onTeamMembers,
        onsyncteammembersdone: onSyncTeamMembersDone,
        onupdateteammember: onUpdateTeamMember,
        // 会话
        onsessions: onSessions,
        onupdatesession: onUpdateSession,
        // 消息
        onroamingmsgs: onRoamingMsgs,
        onofflinemsgs: onOfflineMsgs,
        onmsg: onMsg,
        // 系统通知
        onofflinesysmsgs: onOfflineSysMsgs,
        onsysmsg: onSysMsg,
        onupdatesysmsg: onUpdateSysMsg,
        onsysmsgunread: onSysMsgUnread,
        onupdatesysmsgunread: onUpdateSysMsgUnread,
        onofflinecustomsysmsgs: onOfflineCustomSysMsgs,
        oncustomsysmsg: onCustomSysMsg,
        // 同步完成
        onsyncdone: onSyncDone
    });
}

export function onConnect() {
    console.log('连接成功');
}
export function onWillReconnect(obj) {
    // 此时说明 `SDK` 已经断开连接, 请开发者在界面上提示用户连接已断开, 而且正在重新建立连接
    console.log('即将重连', obj);
}
export function onDisconnect(error) {
    // 此时说明 `SDK` 处于断开状态, 开发者此时应该根据错误码提示相应的错误信息, 并且跳转到登录页面
    console.log('连接断开', error);
    if (error) {
        switch (error.code) {
            // 账号或者密码错误, 请跳转到登录页面并提示错误
            case 302:
                break;
                // 重复登录, 已经在其它端登录了, 请跳转到登录页面并提示错误
            case 417:
                break;
                // 被踢, 请提示错误后跳转到登录页面
            case 'kicked':
                break;
            default:
                break;
        }
    }
}
export function onError(error, obj) {
    console.log('发生错误', error, obj);
}
export function onLoginPortsChange(loginPorts) {
    console.log('当前登录帐号在其它端的状态发生改变了', loginPorts);
}
export function onBlacklist(blacklist) {
    console.log('收到黑名单', blacklist);
    data.blacklist = store.state.nim.mergeRelations(data.blacklist, blacklist);
    data.blacklist = store.state.nim.cutRelations(data.blacklist, blacklist.invalid);
    refreshBlacklistUI();
}
export function onMarkInBlacklist(obj) {
    console.log(obj.account + '被你' + (obj.isAdd ? '加入' : '移除') + '黑名单', obj);
    if (obj.isAdd) {
        addToBlacklist(obj);
    } else {
        removeFromBlacklist(obj);
    }
}
export function addToBlacklist(obj) {
    data.blacklist = store.state.nim.mergeRelations(data.blacklist, obj.record);
    refreshBlacklistUI();
}
export function removeFromBlacklist(obj) {
    data.blacklist = store.state.nim.cutRelations(data.blacklist, obj.record);
    refreshBlacklistUI();
}
export function refreshBlacklistUI() {
    // 刷新界面
}
export function onMutelist(mutelist) {
    console.log('收到静音列表', mutelist);
    data.mutelist = store.state.nim.mergeRelations(data.mutelist, mutelist);
    data.mutelist = store.state.nim.cutRelations(data.mutelist, mutelist.invalid);
    refreshMutelistUI();
}
export function onMarkInMutelist(obj) {
    console.log(obj.account + '被你' + (obj.isAdd ? '加入' : '移除') + '静音列表', obj);
    if (obj.isAdd) {
        addToMutelist(obj);
    } else {
        removeFromMutelist(obj);
    }
}
export function addToMutelist(obj) {
    data.mutelist = store.state.nim.mergeRelations(data.mutelist, obj.record);
    refreshMutelistUI();
}
export function removeFromMutelist(obj) {
    data.mutelist = store.state.nim.cutRelations(data.mutelist, obj.record);
    refreshMutelistUI();
}
export function refreshMutelistUI() {
    // 刷新界面
}
export function onFriends(friends) {
    console.log('收到好友列表', friends);
    data.friends = store.state.nim.mergeFriends(data.friends, friends);
    data.friends = store.state.nim.cutFriends(data.friends, friends.invalid);
    refreshFriendsUI();
}
export function onSyncFriendAction(obj) {
    console.log('收到好友操作', obj);
    switch (obj.type) {
        case 'addFriend':
            console.log('你在其它端直接加了一个好友' + obj);
            onAddFriend(obj.friend);
            break;
        case 'applyFriend':
            console.log('你在其它端申请加了一个好友' + obj);
            break;
        case 'passFriendApply':
            console.log('你在其它端通过了一个好友申请' + obj);
            onAddFriend(obj.friend);
            break;
        case 'rejectFriendApply':
            console.log('你在其它端拒绝了一个好友申请' + obj);
            break;
        case 'deleteFriend':
            console.log('你在其它端删了一个好友' + obj);
            onDeleteFriend(obj.account);
            break;
        case 'updateFriend':
            console.log('你在其它端更新了一个好友', obj);
            onUpdateFriend(obj.friend);
            break;
    }
}
export function onAddFriend(friend) {
    data.friends = store.state.nim.mergeFriends(data.friends, friend);
    refreshFriendsUI();
}
export function onDeleteFriend(account) {
    data.friends = store.state.nim.cutFriendsByAccounts(data.friends, account);
    refreshFriendsUI();
}
export function onUpdateFriend(friend) {
    data.friends = store.state.nim.mergeFriends(data.friends, friend);
    refreshFriendsUI();
}
export function refreshFriendsUI() {
    // 刷新界面
}
export function onMyInfo(user) {
    console.log('收到我的名片', user);
    data.myInfo = user;
    updateMyInfoUI();
}
export function onUpdateMyInfo(user) {
    console.log('我的名片更新了', user);
    data.myInfo = store.state.nim.util.merge(data.myInfo, user);
    updateMyInfoUI();
}
export function updateMyInfoUI() {
    // 刷新界面
}

export function onUsers(users) {
    console.log('收到用户名片列表', users);
    data.users = store.state.nim.mergeUsers(data.users, users);
}


export function onUpdateUser(user) {
    console.log('用户名片更新了', user);
    data.users = store.state.nim.mergeUsers(data.users, user);
}

export function onSuperTeams(superTeams) {
    console.log('收到超大群列表', superTeams)
    data.superTeams = store.state.nim.mergeTeams(data.superTeams, superTeams)
    onInvalidSuperTeams(superTeams.invalid)
}

export function onInvalidSuperTeams(teams) {
    data.superTeams = store.state.nim.cutTeams(data.superTeams, teams)
    data.invalidSuperTeams = store.state.nim.mergeTeams(data.invalidSuperTeams, teams)
    refreshSuperTeamsUI()
}

export function onSyncCreateSuperTeam(team, owner) {
    console.log('创建了一个超大群 onSyncCreateSuperTeam ', team, owner)
    data.superTeams = store.state.nim.mergeTeams(data.superTeams, team)
    refreshSuperTeamsUI()
    onSuperTeamMembers({
        teamId: team.teamId,
        members: owner
    })
}

export function onAddSuperTeamMembers(team, accounts, members) {
    console.log('添加群成员 onAddSuperTeamMembers ', team, accounts, members)
    if (!accounts && !members) {
        accounts = team.accounts || []
        members = team.members || []
        team = team.team || {}
    }
    var teamId = team.teamId

    // 如果是别人被拉进来了，那么拼接群成员列表
    // 如果是自己被拉进来了，那么同步一次群成员列表

    if (accounts.indexOf(data.account) === -1) {
        onSuperTeamMembers({
            teamId: teamId,
            members: members
        })
    } else {
        // ...
    }
    onSuperTeams(team)
}
export function onDismissSuperTeam(obj) {
    console.log('解散超大群 onDismissSuperTeam', obj);
    var teamId = obj.teamId
    removeAllSuperTeamMembers(teamId)
    data.superTeams = store.state.nim.cutTeams(data.superTeams, obj)
    refreshSuperTeamsUI()
    refreshSuperTeamMembersUI()
}
export function onRemoveSuperTeamMembers(obj) {
    console.log('移除了群成员 onRemoveSuperTeamMembers ', obj.accounts, obj)
    var teamId = obj.team.teamId
    var accounts = obj.accounts
    var team
    if (!teamId && !accounts) {
        accounts = obj.accounts || []
    }
    // 如果是别人被踢了，那么移除群成员
    // 如果是自己被踢了，那么离开该群
    if (accounts.indexOf(data.account) === -1) {
        if (team) {
            onSuperTeams(team)
        }
        if (!data.superTeamMembers) {
            data.superTeamMembers = {}
        }
        data.superTeamMembers[teamId] = store.state.nim.cutTeamMembersByAccounts(
            data.superTeamMembers[teamId],
            teamId,
            accounts
        )
        refreshSuperTeamMembersUI()
    } else {
        leaveSuperTeam(teamId)
    }
}

export function onUpdateSuperTeam(err, msg) {
    console.log('更新了超大群 teamId', err, msg)
}
export function onUpdateSuperTeamMember(member) {
    console.log('群成员信息更新了', member)
}
export function leaveSuperTeam(teamId) {
    onInvalidSuperTeams({
        teamId: teamId
    })
    removeAllSuperTeamMembers(teamId)
}
export function refreshSuperTeamsUI() {}
export function refreshSuperTeamMembersUI() {}
export function removeAllSuperTeamMembers() {}
export function onTeams(teams) {
    console.log('群列表', teams);
    data.teams = store.state.nim.mergeTeams(data.teams, teams);
    onInvalidTeams(teams.invalid);
}
export function onInvalidTeams(teams) {
    data.teams = store.state.nim.cutTeams(data.teams, teams);
    data.invalidTeams = store.state.nim.mergeTeams(data.invalidTeams, teams);
    refreshTeamsUI();
}
export function onCreateTeam(team) {
    console.log('你创建了一个群', team);
    data.teams = store.state.nim.mergeTeams(data.teams, team);
    refreshTeamsUI();
    onTeamMembers({
        teamId: team.teamId,
        members: owner
    });
}
export function refreshTeamsUI() {
    // 刷新界面
}
export function onTeamMembers(obj) {
    console.log('收到群成员', obj);
    var teamId = obj.teamId;
    var members = obj.members;
    data.teamMembers = data.teamMembers || {};
    data.teamMembers[teamId] = store.state.nim.mergeTeamMembers(data.teamMembers[teamId], members);
    data.teamMembers[teamId] = store.state.nim.cutTeamMembers(data.teamMembers[teamId], members.invalid);
    refreshTeamMembersUI();
}
export function onSyncTeamMembersDone() {
    console.log('同步群列表完成');
}
export function onUpdateTeamMember(teamMember) {
    console.log('群成员信息更新了', teamMember);
    onTeamMembers({
        teamId: teamMember.teamId,
        members: teamMember
    });
}
export function refreshTeamMembersUI() {
    // 刷新界面
}
export function onSessions(sessions) {
    console.log('收到会话列表', sessions);
    data.sessions = store.state.nim.mergeSessions(data.sessions, sessions);
    var sd_eer = []
    sessions.map(a => {
        let sd_eert = {}
        let sd_eeeetx = JSON.parse(a.lastMsg.content)
        sd_eert.user_icon = sd_eeeetx.user_icon
        sd_eert.msg = sd_eeeetx.data.value
        sd_eert.sessionId = a.lastMsg.sessionId
        sd_eert.target = a.lastMsg.target
        sd_eert.time = a.lastMsg.time
        sd_eer.push(sd_eert)
    })
    store.state.getsessions = sd_eer
    updateSessionsUI();
}
var sd_sdr = true
export function onUpdateSession(session) {
    console.log('会话更新了', session);
    data.sessions = store.state.nim.mergeSessions(data.sessions, session);
    
   
    if (store.state.get_seeid == session.lastMsg.sessionId) {
        get_sdf_er(session.lastMsg.sessionId)
    }
   updateSessionsUI();

}
export function updateSessionsUI() {
    // 刷新界面
}
export function onRoamingMsgs(obj) {
    console.log('漫游消息', obj);
    pushMsg(obj.msgs);
}
export function onOfflineMsgs(obj) {
    console.log('离线消息', obj);
    pushMsg(obj.msgs);
}
export function onMsg(msg) {
    console.log('收到消息', msg.scene, msg.type, msg);
    pushMsg(msg);
    store.state.getsessions.map(a => {
        if (a.target == msg.from) {
            let sd_eert = {}
            let sd_eeeetx = JSON.parse(msg.content)
            a.msg = sd_eeeetx.data.value
            a.time = msg.time

        }
    })

    if (store.state.get_seeid == msg.sessionId) {
        get_sdf_er(msg.sessionId)
    }

}


export function pushMsg(msgs) {
    if (!Array.isArray(msgs)) {
        msgs = [msgs];
    }
    var sessionId = msgs[0].sessionId;
    data.msgs = data.msgs || {};
    data.msgs[sessionId] = store.state.nim.mergeMsgs(data.msgs[sessionId], msgs);
}
export function pushMsg_er(a, msgs) {
    if (!Array.isArray(msgs)) {
        msgs = [msgs];
    }
    var sessionId = msgs[0].sessionId;
    data.msgs = data.msgs || {};
    data.msgs[sessionId] = store.state.nim.mergeMsgs(data.msgs[sessionId], msgs);
}

export function onOfflineSysMsgs(sysMsgs) {
    console.log('收到离线系统通知', sysMsgs);
    pushSysMsgs(sysMsgs);
}


export function onSysMsg(sysMsg) {
    console.log('收到系统通知', sysMsg)
    pushSysMsgs(sysMsg);
}


export function onUpdateSysMsg(sysMsg) {
    pushSysMsgs(sysMsg);
}


export function pushSysMsgs(sysMsgs) {
    data.sysMsgs = store.state.nim.mergeSysMsgs(data.sysMsgs, sysMsgs);
    refreshSysMsgsUI();
}


export function onSysMsgUnread(obj) {
    console.log('收到系统通知未读数', obj);
    data.sysMsgUnread = obj;
    refreshSysMsgsUI();
}


export function onUpdateSysMsgUnread(obj) {
    console.log('系统通知未读数更新了', obj);
    data.sysMsgUnread = obj;
    refreshSysMsgsUI();
}


export function refreshSysMsgsUI() {
    // 刷新界面
}


export function onOfflineCustomSysMsgs(sysMsgs) {
    console.log('收到离线自定义系统通知', sysMsgs);
}
export function onCustomSysMsg(sysMsg) {
    console.log('收到自定义系统通知', sysMsg);
}
export function onSyncDone() {
    console.log('同步完成');

}
export function getLocalMsgsDone(error, obj) {
    console.log('获取本地消息' + (!error ? '成功' : '失败'), error, obj)
}
export function get_sdf(b, sessionId) {
    var th = this
    console.log(sessionId);
    store.state.get_seeid = sessionId
    store.state.nim.getLocalMsgs({
        sessionId: sessionId,
        limit: 100,
        done: function (error, obj) {
            var shu_er = obj.msgs.reverse()
            let sd_eer = []
            shu_er.map(a => {
                let sd_eert = a
                let sd_eeeetx = JSON.parse(a.content)
                sd_eert.user_icon = sd_eeeetx.user_icon
                sd_eert.msg = sd_eeeetx.data.value
                sd_eer.push(sd_eert)
            })
            store.state.get_msglist = sd_eer
        }
    })
}



export function get_sdf_er(sessionId) {
    console.log(sessionId);
    store.state.nim.getLocalMsgs({
        sessionId: sessionId,
        limit: 100,
        done: function (error, obj) {
            var shu_er = obj.msgs.reverse()
            let sd_eer = []
            shu_er.map(a => {
                let sd_eert = a
                let sd_eeeetx = JSON.parse(a.content)
                sd_eert.user_icon = sd_eeeetx.user_icon
                sd_eert.msg = sd_eeeetx.data.value
                sd_eer.push(sd_eert)
            })
            onSessions(data.sessions)
            store.state.get_msglist = sd_eer
        }
    })
}
