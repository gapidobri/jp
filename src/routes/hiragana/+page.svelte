<script lang="ts">
	import { check, getAnswer, getLetter, letters } from '$lib/hiragana';

	let input: HTMLInputElement;
	let inputText: string = '';
	let wrong: boolean = false;
	let answer: boolean = false;

	let letter = letters[Math.floor(Math.random() * letters.length)];
	let src = getLetter(letter);

	function newLetter() {
		letter = letters[Math.floor(Math.random() * letters.length)];
		src = getLetter(letter);
		answer = false;
		inputText = '';
	}

	function setWrong() {
		wrong = true;
		setTimeout(() => {
			wrong = false;
		}, 1000);
	}

	function handleKeyUp(event: KeyboardEvent) {
		const correct = check(letter, inputText);
		if (event.key === 'Enter') {
			if (!correct) {
				wrong = true;
				setWrong();
			}
			inputText = '';
		}
		if (correct) newLetter();
	}

	function handleShowAnswer() {
		answer = true;
		src = getAnswer(letter);
	}

	function handleHideAnswer() {
		answer = false;
		src = getLetter(letter);
	}
</script>

<div class="flex items-center justify-center h-full text-white">
	<div class="flex flex-col items-center space-y-4">
		<img {src} alt="" class="invert" />

		{#if !answer}
			<input
				type="text"
				bind:value={inputText}
				bind:this={input}
				on:keyup={handleKeyUp}
				class="bg-transparent border-2 rounded-md text-center text-lg p-2 outline-none w-1/2"
				class:border-red-500={wrong}
			/>
			<button on:click={handleShowAnswer}>Answer</button>
		{:else}
			<button on:click={handleHideAnswer}>Hide</button>
		{/if}
	</div>
</div>
