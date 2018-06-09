export const menus = [
	{
		name: '会员中心',
		url: 'memberCenter',
		defaultUrl: '/memberCenter/user/organization/staff',
		children: [
			{
				name: '用户管理',
				url: 'user',
				icon: 'appstore',
				children: [
					{
						name: '组织管理',
						url: 'organization',
						icon: 'appstore',
						children: [
							{
								name: '人员管理',
								url: '/memberCenter/user/organization/staff'
							}
						]
					},
					{
						name: '权限管理',
						url: 'rightsmanagement',
						icon: 'appstore',
						children: [
							{
								name: '应用',
								url: '/memberCenter/user/rightsmanagement/one'
							}
						]
					}
				]
			},
			{
				name: '收货订单管理',
				url: 'deliverorders',
				icon: 'appstore',
				children: [
					{
						name: '商家采购订单',
						url: '/memberCenter/deliverorders/sourcepo'
					}
				]
			}
		]
	},
	{
		name: '会员中心1',
		url: 'memberCenter1',
		defaultUrl: '/memberCenter1/user1/organization1/staff1',
		children: [
			{
				name: '用户管理1',
				url: 'user1',
				icon: 'appstore',
				children: [
					{
						name: '组织管理1',
						url: 'organization1',
						icon: 'appstore',
						children: [
							{
								name: '人员管理1',
								url: '/memberCenter1/user1/organization1/staff1'
							}
						]
					},
					{
						name: '权限管理1',
						url: 'rightsmanagement1',
						icon: 'appstore',
						children: [
							{
								name: '应用',
								url: '/memberCenter1/user1/rightsmanagement1/one1'
							}
						]
					}
				]
			},
			{
				name: '收货订单管理1',
				url: 'deliverorders1',
				icon: 'appstore',
				children: [
					{
						name: '商家采购订单',
						url: '/memberCenter1/deliverorders1/sourcepo1'
					}
				]
			}
		]
	},
	{
		name: '会员中心2',
		url: 'memberCenter2',
		defaultUrl: '/memberCenter2/user2',
		children: [
			{
				name: '用户管理2',
				url: '/memberCenter2/user2',
				icon: 'appstore'
			},
			{
				name: '用户管理3',
				url: '/memberCenter2/user3',
				icon: 'appstore'
			}
		]
	}
]