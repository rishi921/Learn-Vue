<script setup>
    import useFormatDate from '@/composables/useFormatDates';
    let date = new Date();
    let dateDDMMYYYY = useFormatDate(date, "DD-MM-YYYY");
    let dateMMDDYYYY = useFormatDate(date, "MM-DD-YYYY");
    let dateDDMMYYYYwSlash = useFormatDate(date, "DD/MM/YYYY");
    let dateMMDDYYYYwSlash = useFormatDate(date, "MM/DD/YYYY");
</script>

<template>
    <h1>Today : {{ date }}</h1>
    <h1>DD-MM-YYYY : {{ dateDDMMYYYY }}</h1>
    <h1>MM-DD-YYYY : {{ dateMMDDYYYY }}</h1>
    <h1>DD/MM/YYYY : {{ dateDDMMYYYYwSlash }}</h1>
    <h1>MM/DD/YYYY : {{ dateMMDDYYYYwSlash }}</h1>
</template>