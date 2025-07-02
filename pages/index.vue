<template>
	<div
		class="min-h-screen bg-gradient-to-b from-white to-[#ffe3f6] py-12 px-4 sm:px-6 lg:px-8"
	>
		<div class="max-w-lg mx-auto">
			<div class="bg-white shadow-md rounded-lg p-8">
				<h1 class="text-2xl font-bold text-[#ff58bf] mb-8 text-center">
					Школа вокала - Я талант<br />Заполните данные для оплаты
				</h1>

				<div class="mb-8">
					<div class="flex justify-between items-center border-b pb-4">
						<span class="font-medium">Выберите абонемент</span>
						<div class="flex items-center">
							<select
								v-model="selectedSubscription"
								class="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-[#ff58bf] focus:border-[#ff58bf]"
							>
								<option value="single">1 урок - 2 000 ₽</option>
								<option value="five">5 уроков - 9 000 ₽</option>
								<option value="ten">10 уроков - 17 000 ₽</option>
							</select>
						</div>
					</div>
					<div class="text-right mt-2 text-[#ff58bf] font-medium">
						Сумма: {{ total }} ₽
					</div>
				</div>

				<form @submit.prevent="submitForm" class="space-y-6">
					<div>
						<label for="name" class="block text-sm font-medium text-gray-700"
							>Ваше имя</label
						>
						<input
							type="text"
							id="name"
							v-model="formData.name"
							required
							class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#ff58bf] focus:border-[#ff58bf]"
						/>
					</div>

					<div>
						<label for="phone" class="block text-sm font-medium text-gray-700"
							>Номер телефона</label
						>
						<div class="mt-1 relative rounded-md shadow-sm">
							<select
								id="country"
								name="country"
								class="absolute left-0 top-0 bottom-0 pl-3 pr-2 text-gray-500"
							>
								<option>🇷🇺 +7</option>
							</select>
							<input
								type="tel"
								id="phone"
								v-model="formData.phone"
								pattern="\+7\s?\(?\d{3}\)?\s?\d{3}-\d{2}-\d{2}"
								placeholder="+7 (999) 999-99-99"
								required
								class="mt-1 block w-full pl-20 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#ff58bf] focus:border-[#ff58bf]"
							/>
						</div>
					</div>

					<div>
						<label for="email" class="block text-sm font-medium text-gray-700"
							>E-mail</label
						>
						<input
							type="email"
							id="email"
							v-model="formData.email"
							required
							class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#ff58bf] focus:border-[#ff58bf]"
						/>
					</div>

					<div>
						<label for="comment" class="block text-sm font-medium text-gray-700"
							>Комментарий к заказу</label
						>
						<textarea
							id="comment"
							v-model="formData.comment"
							rows="3"
							class="comment__textarea mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#ff58bf] focus:border-[#ff58bf]"
						></textarea>
					</div>

					<fieldset class="border-t pt-4">
						<legend class="text-sm font-medium text-gray-700 mb-2">
							Способ оплаты
						</legend>
						<div class="space-y-4">
							<div class="flex items-center">
								<input
									type="radio"
									id="yoomoney"
									v-model="paymentMethod"
									value="yoomoney"
									class="focus:ring-[#ff58bf] h-4 w-4 text-[#ff58bf] border-gray-300"
								/>
								<label for="yoomoney" class="ml-3 block text-sm text-gray-700"
									>Для оплаты в России (ЮMoney)</label
								>
							</div>
							<div class="flex items-center">
								<input
									type="radio"
									id="robokassa"
									v-model="paymentMethod"
									value="robokassa"
									disabled
									class="focus:ring-[#ff58bf] h-4 w-4 text-[#ff58bf] border-gray-300"
								/>
								<label for="robokassa" class="ml-3 block text-sm text-gray-700"
									>Для оплаты за пределами России (Robokassa)</label
								>
							</div>
						</div>
					</fieldset>

					<button
						type="submit"
						class="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#ff58bf] hover:bg-[#e53ebc] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ff58bf] transition duration-300"
					>
						Оплатить
					</button>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			selectedSubscription: "single",
			subscriptions: {
				single: { price: 2000, lessons: 1 },
				five: { price: 9000, lessons: 5 },
				ten: { price: 17000, lessons: 10 },
			},
			paymentMethod: "yoomoney",
			formData: {
				name: "",
				phone: "",
				email: "",
				comment: "",
			},
		}
	},
	computed: {
		currentPrice() {
			return this.subscriptions[this.selectedSubscription].price
		},
		total() {
			return this.currentPrice
		},
	},
	methods: {
		submitForm() {
			alert("Форма отправлена!")
			console.log(this.formData)
		},
	},
}
</script>

<style scoped>
@font-face {
	font-family: "Montserrat";
	src: url("@/assets/fonts/Montserrat-Regular.ttf");
}

@font-face {
	font-family: "Roboto";
	src: url("@/assets/fonts/Roboto-Regular.ttf");
}

body {
	font-family: "Roboto", sans-serif;
}

h1 {
	font-family: "Montserrat", sans-serif;
}

button:hover {
	transform: scale(1.05);
	transition: transform 0.2s ease-in-out;
}

input[type="radio"]:checked + label {
	font-weight: bold;
}

select {
	appearance: none;
	background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' stroke='%236b7280' viewBox='0 0 24 24'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E");
	background-position: right 8px center;
	background-repeat: no-repeat;
	padding-right: 28px;
}

input[disabled] + label {
	opacity: 0.5;
	cursor: not-allowed;
}

.comment__textarea {
	resize: none;
}
</style>
