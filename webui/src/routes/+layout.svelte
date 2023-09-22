<script>
	import '../app.css';
</script>

<div class="bg-default-bg bg-cover h-screen bg-center">
	<nav class="flex w-screen opacity-75 bg-gradient-to-r  from-[#6bcdd6] from-10% via-[#81b7bb] via-30% to-[#6bcdd6] to-90% align-middle justify-center">
		<div class=" space-x-10 ml-auto my-auto text-white">
			<a class=" transition-all  hover:bg-[#4c9298] hover:animate-pulse hover:p-2 hover:scale-y-150 hover:rounded-b-xl hover:duration-300  hover:delay-[50] " href="/">Home</a>
			<a class=" transition-all hover:bg-[#4c9298] hover:animate-pulse hover:p-2 hover:rounded-b-xl hover:duration-300  hover:delay-[50] " href="/about">About</a>
			<a class=" transition-all  hover:bg-[#4c9298] hover:animate-pulse hover:p-2 hover:rounded-b-xl hover:duration-300  hover:delay-[50] " href="/settings">Menu</a>
			<a class=" transition-all  hover:bg-[#4c9298] hover:animate-pulse hover:p-2 hover:rounded-b-xl hover:duration-300  hover:delay-[50] " href="/services">Services</a>
			<a class=" transition-all  hover:bg-[#4c9298] hover:animate-pulse hover:p-2 hover:rounded-b-xl hover:duration-300  hover:delay-[50] " href="/blog">Blog</a>
		</div>
		<input class="bg-slate-500  ml-auto mr-2 rounded-xl  my-1 " type="text" placeholder="  Search" />
        <button type="submit"><i class="fa fa-search"></i></button>
	</nav>

	<slot />
</div>
