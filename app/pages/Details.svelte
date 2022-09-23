<script lang="ts">
  import { onMount } from "svelte";
  import * as api from "../services/api";
  
	export let index: number;
  export let item: any;
  let description = "";

  onMount(() => {
    api.getDescription(index + 1).then(
      (res) => {
        description = res || "";
      },
      (e) => {
        description = "Error fetching data";
      }
    );
  });
</script>

<page>
  <actionBar title={item.name} class="action-bar" />
  <scrollView>
    <stackLayout>
      <image margin="0" height="250" stretch="aspectFit" src={item.image} />
      <stackLayout padding="10 20">
        <stackLayout>
          <label
            marginTop="15"
            fontSize="16"
            fontWeight="700"
            class="text-primary"
            textWrap="true"
            text="Description"
          />
          <label
            fontSize="14"
            class="text-secondary"
            textWrap="true"
            text={description || "Loading..."}
          />
        </stackLayout>
      </stackLayout>
    </stackLayout>
  </scrollView>
</page>
