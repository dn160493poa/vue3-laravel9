<template>
    <div class="editor-page">
        <div class="container page">
            <div class="row">
                <div class="col-md-10 offset-md-1 col-sm-12">
                    <mcv-validation-errors
                        v-if="validationErrors"
                        :validationErrors="validationErrors">
                    </mcv-validation-errors>
                    <form @submit.prevent="onSubmit">
                        <fieldset>
                            <fieldset class="form-group">
                                <input
                                    type="text"
                                    class="form-control form-control-lg"
                                    placeholder="Article Title"
                                    v-model="title">
                            </fieldset>

                            <fieldset class="form-group">
                                <input
                                    type="text"
                                    class="form-control form-control-lg"
                                    placeholder="Description"
                                    v-model="description">
                            </fieldset>

                            <fieldset class="form-group">
                                <textarea
                                    class="form-control form-control-lg"
                                    placeholder="Article Body"
                                    v-model="body">
                                </textarea>
                            </fieldset>

                            <fieldset class="form-group">
                                <input
                                    type="text"
                                    class="form-control form-control-lg"
                                    placeholder="Enter tag"
                                    v-model="tagList">
                            </fieldset>

                            <fieldset class="form-group">
                                <button
                                    type="submit"
                                    class="btn btn-lg float-sm-end btn-primary"
                                    :disabled="isSubmitting"
                                >
                                    Publish Article
                                </button>
                            </fieldset>

                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import McvValidationErrors from "./ValidationErrors";
import {getTagListFromStr} from "../helpers/utils";

export default {
    name: "McvArticleForm",
    components: {
        McvValidationErrors
    },
    props:{
        initialValues:{
            required: true,
            type: Object
        },
        validationErrors: {
            required: false,
            type: Object
        },
        isSubmitting: {
            required: true,
            type: Boolean
        }
    },

    data() {
        return {
            title: this.initialValues.title,
            description: this.initialValues.description,
            body: this.initialValues.body,
            tagList: this.initialValues.tagList.join(' ')
        }
    },

    methods: {
        onSubmit(){
            if(this.title !== '' && this.description !== '' && this.body !== '' && this.tagList !== '') {
                const form = {
                    title: this.title,
                    description: this.description,
                    body: this.body,
                    tagList: getTagListFromStr(this.tagList),
                }
                this.$emit('articleSubmit', form)
            }
        }
    }
}
</script>

<style scoped>
    .form-group {
        margin-bottom: 1rem;
    }
</style>
