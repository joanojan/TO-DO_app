<template>
	<main>
		<h1 class="p-6 bg-gray-500 text-3xl text-white text-center">
			IRON HACK FINAL PROJECT
		</h1>
		<section class="flex my-2 text-xl">
			<div class="mx-auto">
				<h1 class="text-3xl bg-pink-400 text-center p-2 text-slate-200">Crafted with love - Joan Vila Valls -
				</h1>
				<div class="flex justify-around my-4">
					<a class="text-decoration-line text-slate-500 hover:text-pink-400"
						href="https://main--todo-app-by-jvv.netlify.app/">
						Live website
					</a>
					<a class="text-decoration-line text-slate-500 hover:text-pink-400"
						href="https://github.com/joanojan/TO-DO_app">
						GitHub repo
					</a>
				</div>
				<section class="flex-col">
					<p class="text-center font-bold">Single Page Application (SPA) of the classic TO-DO app:</p>
					<ul class="m-4 list-disc ml-20">
						<li>users can sing-up, sign-in, sign-out</li>
						<li>CRUD -> create, read, update and delete tasks. </li>
					</ul>
					<p>Backend support: supabase (open source alternative to Firebase)</p>
					<div class="flex-col mx-10">
						<h3 class="my-4 font-bold text-2xl">-- Frontend stack --</h3>
						<ul class="list-disc ml-10">
							<li>Framework: Vue3</li>
							<li>Build tool: Vite</li>
							<li>Routing: Vue Router</li>
							<li>State managment: Pinia</li>
							<li>CSS framework: Tailwind</li>
						</ul>
					</div>
				</section>
			</div>
		</section>
	</main>
</template>
