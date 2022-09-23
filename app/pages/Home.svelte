<script lang="ts">
  import { navigate } from "svelte-native";
  import { Template } from "svelte-native/components";
  import { ItemEventData } from "@nativescript/core";
  import { onMount } from "svelte";
  import Details from "./Details.svelte";
  import * as api from "../services/api";
  import { PokemonListItem } from "~/types/pokemon";

  let data: PokemonListItem[] = [];

  onMount(() => {
    api.catchemAll().then((items) => (data = items));
  });

  function handleTap(event: ItemEventData) {
    navigate({
      page: Details,
      props: { index: event.index, item: data[event.index] },
    });
  }
</script>

<page>
  <actionBar title="pokeAPI" />
  <stackLayout height="100%">
    <listView height="100%" items={data} on:itemTap={handleTap}>
      <Template let:item>
        <gridLayout rows="*" columns="auto, *" margin="5 10" padding="0">
          <image row="0" col="0" src={item.image} class="thumb" />
          <label row="0" col="1" text={item.name} />
        </gridLayout>
      </Template>
    </listView>
  </stackLayout>
</page>
