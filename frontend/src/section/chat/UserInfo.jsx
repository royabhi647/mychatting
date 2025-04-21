import { Chat, Clock, DotsThreeVertical, VideoCamera, X } from "@phosphor-icons/react";
import React from "react";

function UserInfo({ handleToggleUserInfo }) {
  return (
    <div className="border-l flex flex-col h-full border-stroke dark:border-strokedark">
      <div className="sticky border-b border-stroke dark:border-strokedark flex flex-row items-center justify-between w-full px-6 py-5">
        <div className="text-black dark:text-white font-semibold text-lg">
          Profile
        </div>

        <button onClick={handleToggleUserInfo}>
          <X size={24} />
        </button>
      </div>

      <div className="mx-auto my-8">
        <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQA3wMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAAAgEDBQYHBAj/xABAEAABBAECAwUFBgIHCQAAAAABAAIDEQQFIQYSMQciQVFhEzJxgZEUQqGxwdFSYhVykqKys8IXIyUmNDZkdIL/xAAZAQEAAwEBAAAAAAAAAAAAAAAAAQIDBAX/xAAhEQEBAAIDAQABBQAAAAAAAAAAAQIRAxIxIWEEEyJBUf/aAAwDAQACEQMRAD8A6oVFJj1RSJKAik1KaQLSkBNSKRBaRSelCCFHKnpQgWkeNJuq5N2ucYZuLnO0LTZXwsbG12TLGac4uFht+G1X8UGzcTdomjaG98DC7Nym7GOA91p/md+wK1L/AGtag53tGabiCL+HncSPj0XM4Gl7gWuI38RsvZM4Yw5mgc567Ku19R1fR+1fAyOZmqYb8blAIfC72gP4CvxW96VqmDq+KMnTcmPIhJrmYbr0Pkvl4uleTIIjV9QKWxcH8Y5vC2S/2MYlx5SDPA7bnrxHk6vqkpcX0VSKVWn5cOoYGPm4zrhnjbIwnyIteilZQlKCE6KQV0ik9IpAlJSFZSghBUQlIVpCUhBUAnARSYBEvQVCYhFBAqZFKaQRSmkwU0iCUik1IpAlIpMhAtL5v4wZk6tx1qkUY55X5j29PBvdH0AC+kiFwvMw3M7VNVEYpkeQZCD5Oa13+pVzuptfCbyNovZvnzND58yPHafutslbhpvZlosBD8vmypBv39gVdFxXo2EQybMaHN94NaXV9FntN1/TdTj58LJD2gdaIXH3yvrsuMnjH5Gj6fFjOx2YcIjH3eQUuacb6NhwNDoI2xvYRVeq6Vq3EeiYZLMnNZG/yN7rnnFuo4erQytwJ+d4aXUWlpoeVqMe0yWy63G7dC7K8v7ZwbitIF473wje9gdlttLTOyDH9jwTA8jl9rPK/wCIuv0W7LvedfSUpATUoIQLSE1IpAqUi09KCgrISkKxKUFdJgppAQehRSakIIATUgJggilIClCCFBCZFIFpRSdQgqmsQycth3KarzXJcvFlPE78qbfLmxWiZ429o4bB3xoD6Lr1b9LXPOKQcHVcWR7QI45TET/KdwfwXPz71t0/p9f2xJ0TOw2lmA4Y8RFteMf2pJPW6Wa4d0c42Wyafn5nGi1zQ2x6hZJmtYmPix24OdJsxt1zFeNvFWkx6o2LJyQ2TzDSW9PNc83Y6/kazm8NuysrKyoZZfbe0PKGMDuTfyPVeHI4ey4AcrN9qQNmGUAOPnYCzePxdpf9LywYUgcLNyOFM+vxV3EWuY+VprnROaXNdTgDdFTuxFmN+vR2UvnhhfivkcYPY80cZNhpa6iR8bXQqWmdmeNJ/R7sqZpFsEce3Ue878SPot1pdfHvr9cHLrt8LSKTUilozLSKTqKQJSilZSWkFaUhWFKUCUikyEF6KUoQFJkoTIBShCAUKUIIUJlCCFr3HeK2fhnNkDGmWFrZWurccrgT+FrYl5tQibNg5MThYkhc0j4gqMvNJxuq5Dg4kGu44azIMOREXBp6ijuLHldg/BZTA4bhmhMeoMw3ztG9Yjn2fra1DEe/RdQb9qDvZOI5Xg7ELdueHNibNj6j7Au6kUVxeV6ON7T76wms8NQ4/Li6fLDDZ3ccYNoem5NrH61BFA3C0fTw58mVIC5x3c6yGt+ZNn5LL58+HhRGTIzn5DyPAjZUdmzItf4zfm5DbGNE6ZjfAGw1v0BV8J2qvLlMcfy7HGwRxNjbQa1oDa8AmU/FC63nBCEIBQpQiUUlKekvmgWkhCcqCgRClQgvQhCATpQpHRBKlQpQCEIQQhBVGbm4unwGfOyYseIbl8rw0figuWsdouuzaDw66XE5Rk5EjYY3H7l+876fmsLr/avpGDzRaTBJqMw6Ov2cQ/8AqrPyHzXMeLOM9W4kLGZ7omY8b+ZkMTOVrT53uSp1UbdFytJx9S0zkkYDbdtlzrV9KzdNJZjTSmC7ABuln+B+LWRtj0/VXj2YpsUzj0/ld+hW0atprHWejXeYXDZeOu6WZxx4ieV4ZLLI6+gJWx6Pq8/B+oYGXC4Bj5A3JaejovEfLr8llpdJw8Z0mZlytigi8TtutE13Uxn5p5G/7pvdaw+XqtuPeVn+MeTUmn1Vt4HbwUr594e7S+ItJayKaZmfA0U2PJG4HkHjf810XQ+1bQdQ5Y89k2mynY+078V+jx+oC6dOdvqFRh5mLnQiXCyIsiM/eieHfkr1UCEIQQoKlQiSpSnKQoFQhAQXISkqLQPalICmBQOhRaLQMsXr+v6dw/hfatTn5Gk0xjd3yHyaPFezMyocLDnysl/JBCwvkd5NA3XzlxXxBkcSaxJqGTzMYe7DE42ImeDfK/P1UyDZ9d7VNXznOZpcbdOhPR2z5a+PQfJaNl5mRmzmbMnlyJTuZJpC931KpdsL8fNVn3hS0Qc0KVdWw34pz+ilo2RDH5DZHNEbbobrJ6Pr2qaRkslY+WSIe9FJISx48q8PkqXs7wdtQ3Irqg79L9KVbjL6tMrPEa5rep69Ow5pDYozccEYprT+p9V5IInNPNJ73j6L2PZyAhzdxfXzVYa7k73VxSYyeFtoaNm+asZu51oI3Q0d4qyq/GyZsPIZkYk0kErekkTy1w+YXQeFu1fMxAzH4ijOXAarIjoSMF9XDYOH0K5ufEeaVwHXyUWbS+rYJ4smGOfHkbLFI0OY9psOB6FWLkXYtxI5r5eHcqUuablxOY+6fvMHp4/VdbVLEpUFFqCVAglKVJKQoBChSgdRaglLaBwUwKqtNaCy1KrtNdikGjdseouw+FWYzCQ7MnbGa/hALj+S4lYs3ta6T255T3ahpGK1/cZDLK5vmXEAf4SuZ34HqtMfEJPdFeB6eirHh9VMhob9EkZPd86oqRc4KeiEIgFVtq905SE9/wCSCZC5wdZJJ3s+Kj3nN8gLUvPT1UN3c70FIkyjy+ClVvdXIgjm2u1IN9BR8FTEeawegKtd7ll3KEF2Fmy6ZqGNm4zy2bHlbK0g+IN189wfQr6jxcmPMxYcmK/ZzRte3fwItfKdAMLjsPC+pX0f2f5X2rgrR5vH7M1p+I2/RUyS2G0EpSVCqJJSlBUFAItLakFAxKUlBKQlA4KZVAp7QNaLUWi0HGu2d3tOJ8dvXkwmV83vWgVtvuPPyW9dsP8A3fGf/Cj/AMTlpNgDcLXGfEVS/awd/FVc1D1BBV8gBGy8rtn/ABUUetrtlNqiNystSGJSijI0E0D4+XqoLlDurT8kQaQNa8tjJcwHuuIolEfQnzKQ1dpmmmoJcqJXEDbqEz3KpwLiBahK2MckbbFuKYRb88x6bgeAVjR5fVVygyO9n90e96+ikUm8iQO35B09V3vsgnMvBGO0neKeaP8AvEj8CuGVy+7suzdijyeFstp6Nz31/YYq2EdBtRai0WqJSSkJQSlJQTaAUiYFA7lWTumcqyd0DAqbSJkD2i0qkIOO9sLa4qxXfxYTL+T3rSCFv/bSws1jSZQPfx3t/suB/wBS58X0C4g7eXitcfFb6qeCLLfmstoXB2s8QFsuNC2HELSftMjqY4jwHjf7LCvyWX3mvHn3bpdt7Ms3Fl4Qw4oJwZGl/Ow/1jSy5c+s3GnFjLdVyHXOH9U4fmEepYr42O2ZM3eN/wAHfusfzbL6HynYWqYssLJceZhBDmWJGGuoK4XxPi4MGrSjS/8ApSAeTm5hG7xaD5fuqcfJcrqtOTjmM3GL5kOOw+KGtc73Wn6JmMDjTrFddl0MCPNWfJRzgNslev2THAHlv4pg1jegoIjbHc4IuioYblZ8VsegcPs4hzJcePMbjysj9oAYufnFgHxHSwsvqXZ2NM07Jzn6o6V+OwyBjYaa6vC7Kyy5MZl1taTC3HcanYAPghlVsqZXvB7rd/Bx6I5nBgE5H9YNoLVmaWQNHK3d35LrvYfITw/qUZO7c6/rGz9lyEju9bXWuw4f8H1b/wBxv+WFWpjpQU2oUKiQSlUpSgglM0pCpBQWuVR6oQgkKfFCEDIQhBzftrY3+jdJlrvid7QfQts/kFyeUnkFH3nAFCFpPFb6tZGxoprQAPJXHdgafdI93w+iEK+obVuDW98MbzDo6t1I90H0QhNRXdRZ81PzKEIlXdEpHbgkoQq0Z/s4kc3jDDDTs9r2O9Ryk1+AWR4z4h1DL1DJ07nbFjRvdGWRAj2g6d4km1KFjZP3G0v8GpEAMaKFeVKk91747PK3paELesSdBsK9F1/sPH/L2pO8Tnn/AC2IQqVaOioKEKiSlQUIQKUNQhB//9k=" className="w-44 h-44 rounded-lg object-cover object-center" />
      </div>

      <div className="px-6 space-y-1">
        <div className="text-black dark:text-white text-xl font-medium">
          Blake Jonathan
        </div>

        <span className="text-body text-md">Sales Manager</span>
      </div>

      <div className="px-6 my-6">
        <div className="flex flex-row items-center space-x-2">
          <Clock size={20} />
          <div>6:50 AM local time</div>
        </div>
      </div>

      <div className="px-6 flex flex-row space-x-2">
        <button className="w-full border border-stroke dark:border-strokedark p-2 rounded-md flex flex-row items-center justify-center">
          <Chat size={20} className="mr-3" />
          Message
        </button>

        <button className="w-full border border-stroke dark:border-strokedark p-2 rounded-md flex flex-row items-center justify-center">
          <VideoCamera size={20} className="mr-3" />
          Huddle
        </button>

        <button className="border border-stroke dark:border-strokedark p-2 rounded-md flex flex-row items-center justify-center">
          <DotsThreeVertical size={20} />
        </button>
      </div>

    </div>
  )
}

export default UserInfo;
