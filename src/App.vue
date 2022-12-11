<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { Menu as IconMenu } from '@element-plus/icons-vue'
import * as Paths from './constants/route'
const menus = [
	{
		id: 'content',
		title: '内容管理',
		children: [
			{
				id: 'content/home',
				path: '/content/home',
				title: '首页管理',
			},
			{
				id: 'content/dialog',
				path: '/content/dialog',
				title: '弹窗管理',
			},
		],
	},
	{
		id: 'goods',
		path: '/goods',
		title: '商品管理',
	},
	{
		id: 'order',
		path: '/order',
		title: '订单管理',
	},
]
const handleOpen = (key: string, keyPath: string[]) => {
	console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
	console.log(key, keyPath)
}
</script>

<template>
	<div class="app-container">
		<div class="header">
			<div class="left-title">JD Admin</div>
			<div class="right"></div>
		</div>
		<div class="content-wrapper">
			<sidebar class="wrapper">
				<nav>
					<el-menu
						router
						active-text-color="#1677ff"
						background-color="#fff"
						:openeds="['content']"
						:default-active="Paths.CONTENT_HOME"
						text-color="#fff"
						@open="handleOpen"
						@close="handleClose"
					>
						<div
							v-for="item in menus"
							:key="item.id"
						>
							<el-sub-menu
								v-if="item.children"
								:index="item.id"
							>
								<template #title>
									<el-icon><icon-menu /></el-icon>
									<span>{{ item.title }}</span>
								</template>
								<template v-if="item.children">
									<el-menu-item
										v-for="child in item.children"
										:index="child.path"
										:key="child.id"
										>{{ child.title }}</el-menu-item
									>
								</template>
							</el-sub-menu>
							<div
								v-else
								:title="item.title"
							>
								<template>
									<el-icon><icon-menu /></el-icon>
									<span>{{ item.title }}</span>
								</template>
								<el-menu-item :index="item.path">{{ item.title }}</el-menu-item>
							</div>
						</div>
					</el-menu>
				</nav>
			</sidebar>
			<main>
				<div class="page-container">
					<RouterView />
				</div>
			</main>
		</div>
	</div>
</template>

<style scoped>
header {
	line-height: 1.5;
	max-height: 100vh;
}

.logo {
	display: block;
	margin: 0 auto 2rem;
}

nav {
	width: 100%;
	font-size: 12px;
	text-align: center;
	margin-top: 2rem;
}

nav a.router-link-exact-active {
	color: var(--color-text);
}

nav a.router-link-exact-active:hover {
	background-color: transparent;
}

nav a {
	display: inline-block;
	padding: 0 1rem;
	border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
	border: 0;
}

@media (min-width: 1024px) {
	header {
		display: flex;
		place-items: center;
		padding-right: calc(var(--section-gap) / 2);
	}

	.logo {
		margin: 0 2rem 0 0;
	}

	header .wrapper {
		display: flex;
		place-items: flex-start;
		flex-wrap: wrap;
	}

	nav {
		text-align: left;
		margin-left: -1rem;
		font-size: 1rem;

		padding: 1rem 0;
		margin-top: 1rem;
	}
}
</style>
