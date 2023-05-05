<template>
    <div class="grid gap-28 !text-black pt-[117px]">
        <!--- Header part -->
        <section class=" lg:px-[128px] px-4">
            <div class="grid text-center justify-center gap-[36px]">
                <div class="grid gap-[12px]">
                    <h1 class="lg:text-[30px] text-[20px] font-[700]">
                        Designing a Liquid Staking Solution for ETH 2.0
                    </h1>
                    <div class="flex justify-center">
                        <p class="lg:text-[20px] text-[16px] ">
                            A liquid staking solution that solves the problem of locked liquidity by <br> providing instant
                            liquidity for staked assets.
                        </p>
                    </div>
                </div>
                <img src="../../assets/images/project/frame5.png">
            </div>
        </section>


        <section class=" grid gap-[151px]">

            <!--- Overview -->
            <div class="grid text-start gap-8  lg:px-[227px] px-4">
                <div class="grid text-start gap-[12px]">
                    <h1 class="lg:text-[32px] text-[22px] font-[700]">Overview</h1>
                    <p class="lg:text-[20px] text-[16px] lg:w-[90%] text-[#747474]">
                        Staking is the act of depositing 32 ETH to activate validator software. A validator stores data,
                        processes transactions and adds new blocks to the blockchain. Liquid staking (also known as soft
                        staking) allows stakers deposit any amount of ETH by joining forces with other stakers. Unlike
                        proof-of-stake staking (PoS) that locks fund in the protocol, stakers receive liquid staking
                        derivatives in exchange for their staked assets.
                    </p>
                </div>

                <div class="grid grid-cols-3 gap-4">
                    <div class="grid h-fit">
                        <span class="text-[18px] font-[500] text-black">Client</span>
                        <span class="text-[#747474] text-[18px] font-[400]">Stakify</span>
                    </div>

                    <div class="grid h-fit">
                        <span class="text-[18px] font-[500] text-black">Timeline</span>
                        <span class="text-[#747474] text-[18px] font-[400]">2 Weeks</span>
                    </div>
                    <div class="grid h-fit">
                        <span class="text-[18px] font-[500] text-black">My Role</span>
                        <span class="text-[#747474] text-[18px] font-[400]">Product Designer</span>
                    </div>

                    <div class="grid h-fit">
                        <span class="text-[18px] font-[500] text-black">What I did</span>
                        <div class="grid text-[#747474] text-[18px] font-[400]">
                            <span>User research</span>
                            <span>Information architecture</span>
                            <span>Brand Identity design</span>
                            <span>Usability testing</span>
                            <span>Wireframing</span>
                            <span>UI/UX design</span>
                        </div>
                    </div>

                    <div class="grid h-fit">
                        <span class="text-[18px] font-[500] text-black">Tools</span>
                        <span class="text-[#747474] text-[18px] font-[400]">Figma, Papers, Miro</span>
                    </div>
                </div>
            </div>
            <!--- End -->


            <div class="grid text-start gap-8 lg:px-[227px] px-4 bg-[#FEFEFE]">
                <div class="grid gap-[22px] lg:w-[90%]">
                    <h1 class="lg:text-[32px] text-[22px] font-[700] text-[#161616]">Project brief</h1>
                    <div class="grid text-start gap-[33px]">
                        <p class="lg:text-[20px] text-[16px] text-[#747474] ">
                            Stakify is a staking protocol built to contribute to the security of ethereum and to support its
                            decentralization. It is a liquid staking solution that solves the problem of locked liquidity by
                            providing instant liquidity for staked assets. It lowers the staking barrier by allowing stakers
                            stake any amount of ETH.
                        </p>

                        <p class="lg:text-[20px] text-[16px] text-[#747474]">
                            The aim of Stakify is to make staking on ethereum accessible. It allows stakers delegate any
                            amount
                            of ETH token to a staking pool and start earning rewards on them.
                        </p>
                        <p class="lg:text-[20px] text-[16px] text-[#747474]">
                            Stakers will receive a token sETH which represents their staked ETH. The staked ETH can be used
                            as
                            collateral in DeFi applications to accrue more rewards.n. It is a liquid staking solution that
                            solves the problem of locked liquidity by providing instant liquidity for staked assets. It
                            lowers
                            the staking barrier by allowing stakers stake any amount of ETH.
                        </p>
                    </div>
                </div>
            </div>


            <div class="py-[65px] bg-[#FBFBFC]">


                <div class="grid text-start gap-8   lg:px-[227px] px-4 ">
                    <div class="grid text-start gap-4 lg:w-[75%]">
                        <h1 class="lg:text-[32px] text-[22px] font-[700]">The Problem</h1>
                        <p class="lg:text-[20px] text-[16px] text-[#212121] ">
                            After the merge, ethereum now consisted of two chains, the beacon chain and the consensus layer.
                            Staking withdrawals are locked until withdrawals are enabled.
                        </p>

                        <h1 class="text-[26px] font-[700]">Stakify was built to address the following problems;
                        </h1>

                        <div class="lg:text-[20px] text-[16px] text-[#212121] grid gap-11">
                            <div>
                                <h1 class="text-[22px] font-[600]">Locked-up liquidity</h1>
                                <p>
                                    Currently withdrawals are disabled on ethereum due to the merge, this means that staking
                                    rewards are inaccessible until the shanghai upgrade.
                                </p>
                            </div>


                            <div>
                                <h1 class="text-[22px] font-[600]">32 ETH Barrier</h1>
                                <p>
                                    Depositing 32 ETH to activate a validator node is not very feasible for a lot of users.
                                    Some
                                    users want to stake as little as 0.1 ETH and other have more than 32 ETH, a staking
                                    protocol
                                    with pooling functionality like Stakify was built to address this problem by allowing
                                    users
                                    stake any amount of ETH which is then pooled together with the stake of other users to
                                    activate a validator.
                                </p>
                            </div>


                            <div>
                                <h1 class="text-[22px] font-[600]">Technical barrier</h1>
                                <p>
                                    Staking directly on the ethereum protocol will require knowing how to run an etehreum
                                    node
                                    and operating the hardware needed to run the execution and consensus layer client. This
                                    requires some technical knowhow.
                                </p>
                            </div>

                        </div>

                    </div>
                </div>



                <div class="grid text-start gap-8 bg-[#FBFBFC] lg:px-[227px] px-4 pt-[151px]">
                    <div class="grid text-start gap-4 lg:w-[70%]">
                        <h1 class="text-[22px] font-[700]">The Goal</h1>
                        <p class="lg:text-[20px] text-[16px] text-[#212121] ">
                            Stakers will be able to stake any amount of ETH by joining forces with other stakers. Staker
                            will
                            get a token that represents a claim on their staked ETH. They can make use of the staked ETH as
                            collateral in DeFi applications to boost their yield.
                        </p>

                    </div>
                </div>
            </div>

            <div class="grid text-start gap-8 lg:px-[227px] px-4">
                <div class="grid text-start gap-4 lg:w-[90%]">
                    <h1 class="text-[22px] font-[700]">Visual Design</h1>
                    <div class="lg:text-[20px] text-[16px] text-[#212121] grid gap-6 ">
                        <p>
                            As the sole designer on this project, I had complete creative control over the brand's look and
                            feel. This included developing the brand identity by selecting the color scheme and typeface to
                            ensure coherence between the brand identity and the UI design. Opting for cool colors and a
                            welcoming, aesthetically pleasing interface.
                        </p>
                        <p>
                            I designed both the web application and landing page.
                        </p>
                    </div>

                </div>
            </div>

        </section>

        <section>
            <img src="../../assets/images/project/stakify.png">

            <div class="mb-[100px] ">
                <h1 class="lg:pl-32 pl-4 pb-[29px] lg:text-[32px] text-[22px] font-[600] ">Dashboard</h1>

                <div
                    class="bg-[#044958] lg:p-32 lg:grid lg:grid-cols-2 grid-cols-1 flex flex-col gap-[31px] px-[17px] py-[52px]">
                    <div class="flex flex-col gap-[18px]">
                        <span class="font-[500] text-[#D8F7FD] text-[16px]">Dashboard of new user</span>
                        <img src="../../assets/images/project/Dash-3.png">
                    </div>
                    <div class="flex flex-col gap-[18px]">
                        <span class="font-[500] text-[#D8F7FD] text-[16px]">Dashboard of existing user</span>
                        <img src="../../assets/images/project/Dash-1.png">
                    </div>
                    <div class="flex justify-center col-span-2 ">
                        <img class="lg:w-1/2" src="../../assets/images/project/Dash-2.png">
                    </div>
                </div>

            </div>

            <div class="mb-[100px]">
                <h1 class="lg:pl-32 pl-4 pb-[29px] lg:text-[32px] text-[22px] font-[600] ">Stake ETH</h1>

                <div
                    class="bg-[#FAFAFB] lg:p-32 lg:grid lg:grid-cols-2 grid-cols-1 flex flex-col gap-[31px] px-[17px] py-[52px] capitalize">
                    <div class="flex flex-col gap-[18px]">
                        <span class="font-[500] text-[#056175] text-[16px]">Stake</span>
                        <img class="stake-img lg:h-[85%]" src="../../assets/images/project/stake-4.png">
                    </div>
                    <div class="flex flex-col gap-[18px]">
                        <span class="font-[500] text-[#056175] text-[16px]">Input stake amount</span>
                        <img class="stake-img" src="../../assets/images/project/stake-3.png">
                    </div>

                    <div class="flex flex-col gap-[18px]">
                        <span class="font-[500] text-[#056175] text-[16px]">Confirm stake</span>
                        <img class="lg:h-[85%]" src="../../assets/images/project/stake-1.png">
                    </div>
                    <div class="flex flex-col gap-[18px]">
                        <span class="font-[500] text-[#056175] text-[16px]">Stake successful</span>
                        <img src="../../assets/images/project/stake-2.png">
                    </div>
                </div>
            </div>

            <div class="mb-[100px]">
                <h1 class="lg:pl-32 pl-4 pb-[29px] lg:text-[32px] text-[22px] font-[600]">Pools and Earnings</h1>

                <div
                    class="bg-[#FAFAFB] lg:p-32 lg:grid lg:grid-cols-2 grid-cols-1 flex flex-col gap-[22px] px-[17px] py-[52px] capitalize">
                    <div class="grid gap-[22px]">
                        <div class="flex flex-col gap-[18px] h-fit">
                            <span class="font-[500] text-[#056175] text-[16px]">Pools</span>
                            <img class="stake-img lg:h-[85%]" src="../../assets/images/project/pools-1.png">
                        </div>

                        <img class="hidden lg:block" src="../../assets/images/project/pools-3.png">
                    </div>
                    <div class="flex flex-col gap-[18px]">
                        <span class="font-[500] text-[#056175] text-[16px]">Earnings</span>
                        <img class="stake-img" src="../../assets/images/project/pools-2.png">
                    </div>
                    <img class="block lg:hidden" src="../../assets/images/project/pools-3.png">

                </div>
            </div>



            <div>
                <h1 class="lg:pl-32 pl-4 pb-[29px] lg:text-[32px] text-[22px] font-[600] ">Landing page</h1>

                <div class="bg-[#E9ECEF] ">
                    <img class="hidden lg:block" src="../../assets/images/project/frame9.png">
                    <img class="block lg:hidden" src="../../assets/images/project/frame9mobile.png">
                </div>
            </div>




            <!--Create Wallet--->
            <section class="grid gap-40 lg:px-[227px] px-4 py-[102px] bg-[#F3F3F6]">

                <div class="grid gap-[55px] h-fift">
                    <div class="grid gap-[16px] h-fit">
                        <h1 class="lg:text-[32px] text-[22px] font-[500]">
                            Conclusion
                        </h1>
                        <p class="lg:text-[20px] text-[16px] text-[#747474]">
                            Creating Stakify was both a stimulating and demanding project that allowed me <br> to gain
                            valuable insights into liquid staking and its many possibilities.
                        </p>
                    </div>

                    <div class="grid gap-[16px]">
                        <h1 class="lg:text-[32px] text-[22px] font-[500]">My key takeaways</h1>

                        <ul class="grid lg:text-[20px] text-[16px] text-[#747474] lg:w-[60%] list-disc pl-8 gap-4">
                            <li>
                                Staking should be accessible to all and the solutions should appeal to newbies and not just
                                crypto
                                experts.
                            </li>
                            <li>
                                Pooled staking is one of the best things that’s happening in DeFi, It shows the importance
                                of
                                continuous innovations and how it can impact the entire ecosystem.
                                better.
                            </li>
                            <li>
                                We should all contribute our own quota in building a decentralized internet, it is not the
                                job
                                of a few, it is for everyone.
                            </li>
                        </ul>
                    </div>

                </div>
            </section>
            <!-- End --->
        </section>
    </div>
</template>

<style scoped>.stake-img {
    box-shadow: 0px 12px 80px 3px rgba(0, 0, 0, 0.1);
}</style>