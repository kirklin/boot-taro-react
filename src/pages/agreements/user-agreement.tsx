import { Text, View } from "@tarojs/components";
import PageWrapper from "~/components/PageWrapper";
import { RouteNames } from "~/constants/routes";
import { navigateTo } from "~/utils/route";

export default function UserAgreement() {
  const handlePrivacyClick = () => {
    navigateTo(RouteNames.PRIVACY_POLICY);
  };

  return (
    <PageWrapper
      navTitle="用户协议"
      className="h-full"
    >
      <View className="p-4 text-sm text-text leading-sm space-y-4">
        <View className="text-center text-lg text-text font-bold">_boot-taro-react_用户服务协议</View>

        <View>更新日期：2025年1月21日</View>
        <View>生效日期：2025年1月21日</View>

        <View className="font-medium">导言</View>
        <View>
          尊敬的用户：
          非常感谢您注册使用_boot-taro-react_小程序。为让您更好地使用_boot-taro-react_提供的产品和服务，请您务必审慎阅读、充分理解《_boot-taro-react_用户服务协议》（以下称"用户协议"或"本协议"）各条款内容，
          <Text className="font-bold">特别是涉及免除或者限制责任的条款、限制用户权利的条款、权利许可和信息使用的条款、同意开通和使用特殊单项服务的条款、法律适用和争议解决条款等</Text>
          ，我们已将这些重要内容以加粗字体标注，以便于您识别和重点阅读。
          <Text className="font-bold">如您未满18周岁，请您在法定监护人陪同下仔细阅读并充分理解本协议，尤其是其中的未成年人使用条款，并在征得法定监护人同意后使用_boot-taro-react_。</Text>
        </View>
        <View className="font-bold">
          当您开始使用_boot-taro-react_的产品或服务时，则视为您已详细阅读并充分理解本协议，同意作为本协议的一方当事人接受本协议的约束。如您不同意本协议，可以选择不使用_boot-taro-react_。
        </View>

        <View className="space-y-2">
          <View className="text-text font-medium">1. 协议范围</View>
          <View>
            1.1 _boot-taro-react_小程序是由XXX有限公司（以下称"_boot-taro-react_"或"我们"）提供的互联网产品和服务。
          </View>
          <View>
            1.2 本用户协议是用户（您）与_boot-taro-react_之间关于使用_boot-taro-react_提供的产品和服务所订立的协议。本协议条款的效力及于_boot-taro-react_所提供的一切产品和服务，用户在享受_boot-taro-react_任何单项服务时，应当受本协议的约束。
          </View>
          <View>
            1.3 本协议项下的产品和服务是指由_boot-taro-react_发布的包括但不限于互联网增值、互动娱乐和广告等的互联网产品和服务（形式包括但不限于在线视频、评论、跟帖、弹幕、图片、软件、技术代码等）。
          </View>
          <View>
            1.4 本协议内容同时包括
            <Text className="text-primary-6 underline" onClick={handlePrivacyClick}>《隐私政策》</Text>
            及所有_boot-taro-react_已经发布或未来可能发布的各类规则、公告或通知。
            <Text className="font-bold">如您不同意本协议的约定，您应立即停止注册/激活并停止使用_boot-taro-react_的相关产品和服务。</Text>
          </View>
          <View className="font-bold">
            1.5 _boot-taro-react_有权根据需要不时地修订本协议及/或各类规则，并以在线公告的方式进行变更公告。若您在前述公告修订后继续使用_boot-taro-react_的产品或服务，即视为您已阅读、理解并接受经过修订的协议和规则。若您不同意修订，应当立即停止使用_boot-taro-react_提供的产品和服务。
          </View>
        </View>

        <View className="space-y-2">
          <View className="text-text font-medium">2. 账号注册与使用</View>
          <View>
            2.1 您需要使用微信授权登录来使用我们的服务。您在使用微信授权登录时，应当遵守微信平台的相关规则和要求。我们将依据您的授权获取必要的用户信息，包括但不限于微信头像、昵称等公开信息。
          </View>
          <View>
            2.2 您可以在未登录状态下浏览_boot-taro-react_的部分内容，但某些功能和服务可能需要您完成微信授权登录后才能使用。在使用特定功能前，您可能需要按照国家相关法律法规的要求完成实名认证。
          </View>
          <View>
            2.3 您有权在_boot-taro-react_中设置昵称、头像等账号信息。您设置的账号信息不得违反法律法规，不得侵犯他人合法权益。您不得假冒他人身份，不得使用可能误导他人的名称，不得使用侮辱性、歧视性的词语。我们有权对违规的账号信息进行处理，包括但不限于要求修改、重置或删除。
          </View>
          <View>
            2.4 您的_boot-taro-react_账号仅限您本人使用，禁止以任何形式转让、出售或允许他人使用。如果我们发现或有合理理由认为您的账号存在被他人使用的情况，我们有权暂停或终止提供服务。
          </View>
          <View>
            2.5 您在使用_boot-taro-react_时应当提供真实、准确、合法的信息。当您的信息发生变更时，应及时更新。如果您提供的信息不准确、不真实或不合法，我们有权要求您更正或补充，必要时可以拒绝提供相关服务。
          </View>
          <View>
            2.6 您应当妥善保管自己的账号信息，因您主动泄露或因您自身原因导致账号被他人使用而造成的损失，由您自行承担。如发现账号存在异常使用情况，请立即通知我们。
          </View>
          <View>
            2.7 为维护良好的社区秩序，我们可能会对违规账号采取警告、功能限制、暂停使用等处理措施。处理措施的严厉程度将根据违规行为的性质和危害程度综合确定。
          </View>
          <View>
            2.8 您可以申请注销您的_boot-taro-react_账号。注销账号前，请确保您已了解注销的后果：注销后，您的账号信息将被删除或匿名化处理（法律法规另有规定的除外），您将无法使用该账号登录_boot-taro-react_，也无法找回账号相关的任何内容或信息。账号注销后，您仍应对注销前的行为承担相应责任。
          </View>
          <View>
            2.9 如您的账号连续超过六个月未登录使用，我们有权对账号进行冻结或回收处理。在处理前，我们会以适当方式向您发出提醒通知。如您在收到通知后仍未按提示进行操作，我们将对账号进行相应处理。
          </View>
        </View>

        <View className="space-y-2">
          <View className="text-text font-medium">3. _boot-taro-react_产品及服务</View>
          <View>
            3.1 您使用_boot-taro-react_产品及服务的途径，包括访问_boot-taro-react_小程序，或通过微信小程序平台搜索并使用_boot-taro-react_小程序。若您并非从上述正规途径获取_boot-taro-react_产品或服务的，我们无法保证该版本为官方版本，亦不能保障相关版本的_boot-taro-react_能够正常使用。如您因使用非官方版本的_boot-taro-react_而遭受损失，除法律法规另有明确规定外，我们不承担任何赔偿或补偿责任。
          </View>
          <View>
            3.2 您使用_boot-taro-react_需自行准备如智能手机等相关终端设备。为实现_boot-taro-react_的全部功能，您需将终端设备联网，您应自行承担所需要的上网费、流量费等费用。
          </View>
          <View>
            3.3 我们为微信小程序平台开发并维护_boot-taro-react_小程序，请您通过微信小程序平台访问和使用_boot-taro-react_。
          </View>
          <View>
            3.4 我们许可您一项个人的、可撤销的、不可转让的、非独占的和非商业的合法使用_boot-taro-react_的权利。本协议未明示授权的其他一切权利仍由我们保留。除非得到我们事先明示的书面授权，您不得以任何未经授权的形式使用_boot-taro-react_，包括但不限于改编、复制、传播、爬虫、垂直搜索、镜像或交易等。
          </View>
          <View>
            3.5 为提升用户体验，或基于整体服务运营、平台安全、合规经营的需要，我们可能不定期更新或变更_boot-taro-react_产品或服务，包括但不限于修改、升级、中止或终止相关服务、提供新服务等，您可根据需要自行选择是否继续使用。如您选择不使用更新后的服务，则_boot-taro-react_的部分功能可能受到限制或不能正常使用。
          </View>
        </View>

        <View className="space-y-2">
          <View className="text-text font-medium">4. 信息内容发布规范</View>
          <View>
            4.1 我们致力于提供文明、理性、友善、高质量的交流平台。在您按规定完成真实身份信息认证后，可以使用_boot-taro-react_制作、发布视频、图片、文字等信息内容，并保证所发布信息内容（无论是否公开）符合法律法规要求，
            <Text className="font-bold">如您发布涉及国内外时事、公共政策、社会事件等相关信息时，应当准确标注信息来源。</Text>
          </View>
          <View>
            4.2 您不得制作、复制、发布、传播以下违法违规内容：
          </View>
          <View className="pl-4 space-y-1">
            <View>（1）反对宪法确定的基本原则的；</View>
            <View>（2）危害国家安全，泄露国家秘密，颠覆国家政权，破坏国家统一的；</View>
            <View>（3）损害国家荣誉和利益的；</View>
            <View>（4）歪曲、丑化、亵渎、否定英雄烈士事迹和精神，以侮辱、诽谤或者其他方式侵害英雄烈士的姓名、肖像、名誉、荣誉的；</View>
            <View>（5）宣扬恐怖主义、极端主义或者煽动实施恐怖活动、极端主义活动的；</View>
            <View>（6）宣扬民族仇恨、民族歧视，破坏民族团结的；</View>
            <View>（7）破坏国家宗教政策，宣扬邪教和封建迷信的；</View>
            <View>（8）编造、散布谣言、虚假信息，扰乱经济秩序和社会秩序、破坏社会稳定的；</View>
            <View>（9）散布、传播淫秽、色情、赌博、暴力、凶杀、恐怖或者教唆犯罪的；</View>
            <View>（10）侮辱或者诽谤他人，侵害他人名誉权、隐私权、肖像权、知识产权或其他合法权益的；</View>
            <View>（11）违反互联网广告相关法律法规的商业广告；</View>
            <View>（12）法律、行政法规禁止的其他内容。</View>
          </View>
          <View>
            4.3 您不得制作、复制、发布以下不良内容，亦应当主动抵制此类内容的传播：
          </View>
          <View className="pl-4 space-y-1">
            <View>（1）使用夸张标题，内容与标题严重不符的；</View>
            <View>（2）炒作绯闻、丑闻、劣迹等的；</View>
            <View>（3）不当评述自然灾害、重大事故等灾难的；</View>
            <View>（4）带有性暗示、性挑逗等易使人产生性联想的；</View>
            <View>（5）展现血腥、惊悚、残忍等致人身心不适的；</View>
            <View>（6）煽动人群歧视、地域歧视等的；</View>
            <View>（7）宣扬低俗、庸俗、媚俗内容的；</View>
            <View>（8）可能引发未成年人模仿不安全行为和违反社会公德行为、诱导未成年人不良嗜好等的；</View>
            <View>（9）对他人进行暴力恐吓、威胁，实施网络暴力行为的；</View>
            <View>（10）散布污言秽语，损害社会公序良俗的；</View>
            <View>（11）其他含有违反法律法规、公共政策、公序良俗，或可能干扰我们正常运营，侵犯其他用户或第三方合法权益的。</View>
          </View>
          <View className="font-bold">
            4.4 您不得制作、复制、发布、传播含有高危险性、危害表演者自身或他人身心健康的内容：
          </View>
          <View className="pl-4 font-bold space-y-1">
            <View className="font-bold">（1）任何暴力和/或自残行为内容的；</View>
            <View className="font-bold">（2）任何威胁生命健康、利用危险器械表演，或其表演方法可能危及自身或他人人身和/或财产安全的；</View>
            <View className="font-bold">（3）怂恿、诱导他人参与可能会造成人身伤害或导致死亡的危险活动的。</View>
          </View>
          <View>
            4.5 您不得利用基于深度学习、虚拟现实等的新技术新应用制作、发布、传播虚假新闻资讯信息。您在发布或传播利用基于深度学习、虚拟现实、生成式人工智能等新技术新应用制作的非真实音视频信息，或其他可能导致公众混淆或误认的信息内容时，
            <Text className="font-bold">应当以显著方式予以标识。</Text>
          </View>
          <View>
            4.6 您不得发布扰乱平台经营秩序的信息，包括但不限于垃圾信息、商业招揽信息、过度营销信息，与所评论的内容没有关联的信息，刻意使用字符组合以逃避技术审核的信息。
          </View>
          <View className="font-bold">
            4.7 如果我们有合理理由认为您的行为违反或可能违反上述约定的，我们有权进行处理，包括在不事先通知的情况下终止向您提供_boot-taro-react_的全部或部分服务，并依法追究相关方的法律责任。
          </View>
        </View>

        <View className="space-y-2">
          <View className="text-text font-medium">5. 网络安全保护</View>
          <View>
            5.1 您不得使用任何插件、外挂、系统或第三方工具对_boot-taro-react_的正常运行进行干扰、破坏、修改或施加其他影响，包括但不限于使用任何自动化程序、软件或类似工具接入_boot-taro-react_，收集或处理其中信息、内容。
          </View>
          <View>
            5.2 您不得进行任何危害_boot-taro-react_系统安全的行为，亦不得利用_boot-taro-react_从事任何危害计算机网络安全的行为。该等行为包括但不限于：
          </View>
          <View className="pl-4 space-y-1">
            <View>（1）非法侵入网络、干扰网络正常功能、窃取网络数据等危害网络安全的活动；</View>
            <View>（2）提供专门用于从事侵入网络、干扰网络正常功能及防护措施、窃取网络数据等危害网络安全活动的程序、工具；</View>
            <View>（3）明知他人从事危害网络安全的活动的，为其提供技术支持、广告推广、支付结算等帮助；</View>
            <View>（4）使用未经许可的数据或进入未经许可的服务器或账号；</View>
            <View>（5）未经允许进入公众计算机网络或者他人计算机系统并删除、修改、增加存储信息；</View>
            <View>（6）未经许可，企图探查、扫描、测试_boot-taro-react_系统或网络的弱点或其他实施破坏网络安全的行为；</View>
            <View>（7）企图干涉、破坏_boot-taro-react_系统或网站的正常运行，故意传播恶意程序或病毒以及其他破坏干扰正常网络信息服务的行为；</View>
            <View>（8）伪造TCP/IP数据包名称或部分名称；</View>
            <View>（9）对_boot-taro-react_进行反向工程、反向汇编、编译或者以其他方式尝试发现_boot-taro-react_的源代码；</View>
            <View>（10）恶意注册_boot-taro-react_账号，包括但不限于频繁、批量注册账号；</View>
            <View>（11）其他可能危害_boot-taro-react_或其他平台计算机网络安全的行为。</View>
          </View>
          <View>
            5.3 未经我们书面许可，任何用户、第三方均不得自行或协助他人对_boot-taro-react_中的信息或内容进行如下行为：
          </View>
          <View className="pl-4 space-y-1">
            <View>（1）利用_boot-taro-react_中的信息或内容，用于宣传自身产品、为自身产品增加用户、混淆自身产品与_boot-taro-react_的关系等不正当竞争的目的；</View>
            <View>（2）擅自编辑、整理、改编_boot-taro-react_中的信息或内容后，在_boot-taro-react_的源页面以外的渠道或平台进行展示；</View>
            <View>（3）采用技术手段或特殊识别方法，对_boot-taro-react_中的信息或内容进行修改、劫持、导流、遮挡、插入、弹窗，或其他导致用户无法正常使用_boot-taro-react_的行为；</View>
            <View>（4）以盗链、冗余盗取、爬虫抓取、模拟下载、深度链接、假冒注册等任何不正当方式盗取、监视、复制、传播、展示、镜像、上传、下载、使用_boot-taro-react_中的信息或内容；</View>
            <View>（5）以隐藏或修改_boot-taro-react_域名、_boot-taro-react_标识、_boot-taro-react_用户信息等方式使用、传播_boot-taro-react_中的信息或内容；</View>
            <View>（6）利用未经授权获取的_boot-taro-react_中的信息或内容用于统计热词、命中率、分类、搜索量、点击率、阅读量等。</View>
            <View>（7）将_boot-taro-react_中的信息或内容用于任何形式的销售和商业使用，或以任何形式向第三方提供或允许第三方使用。</View>
            <View>（8）干扰_boot-taro-react_中的信息或内容的相关数据，包括影响内容播放量，篡改_boot-taro-react_数据等。</View>
            <View>（9）其他非法获取或使用_boot-taro-react_中的信息或内容的行为。</View>
          </View>
          <View className="font-bold">
            5.4 如果我们有合理理由认为您的行为违反或可能违反上述约定的，或您有其他行为导致_boot-taro-react_的信息和内容受到不利影响，或导致_boot-taro-react_用户的权益受损的，我们有权进行处理，包括在不事先通知的情况下终止向您提供服务，并依法追究相关方的法律责任。
          </View>
        </View>

        <View className="space-y-2">
          <View className="text-text font-medium">6. 通知</View>
          <View className="font-bold">
            6.1 为给您提供更好的服务，或因国家法律法规、政策调整，技术条件、产品功能等变化需要，我们会适时对本协议进行修订，修订内容构成本协议的组成部分。本协议更新后，我们会在_boot-taro-react_小程序及官方网站发出更新版本，并在更新后的条款生效前通过_boot-taro-react_小程序及官方网站公告或其他适当的方式提醒您更新的内容，以便您及时了解本协议的最新版本，您也可以在_boot-taro-react_小程序或官方网站中查阅最新版本的协议条款。如您继续使用_boot-taro-react_，即表示您已同意接受修订后的本协议内容。如您对修订后的协议内容存有异议的，请立即停止登录或使用_boot-taro-react_。
          </View>
          <View className="font-bold">
            6.2 我们对您的通知可能会以包括但不限于系统提示、页面弹窗或提示、公告、站内信、电子邮件、手机短信等方式中的一种或多种进行，如果您在_boot-taro-react_中预留的联系方式发生变化的，您应当及时更新。我们的通知可能对您的权利义务有重大影响，您应注意保持可联系状态并及时查阅上述通知内容。
          </View>
        </View>

        <View className="space-y-2">
          <View className="text-text font-medium">7. 免责声明</View>
          <View className="font-bold">
            7.1 您理解并同意，我们提供的_boot-taro-react_产品及服务是按照现有技术和条件所能达到的现状提供的。我们不对下述情形进行任何明示或暗示的保证：
          </View>
          <View className="pl-4 font-bold space-y-1">
            <View>（1）_boot-taro-react_产品及服务完全适合您的使用要求、符合特定用途，经由我们取得的任何产品、服务或其他信息符合您的期望；</View>
            <View>（2）_boot-taro-react_产品及服务不受干扰，及时、安全、可靠或不出现任何错误，永久可用；</View>
            <View>（3）_boot-taro-react_产品及服务中任何错误都将能得到更正；</View>
            <View>（4）您在使用_boot-taro-react_产品及服务过程中不面临任何风险。</View>
          </View>
          <View className="font-bold">
            7.2 我们会尽最大努力确保服务的连贯性和安全性，但_boot-taro-react_产品及服务可能会受多种因素的影响或干扰。您理解并同意，因下述情况导致服务暂停、中止、终止或造成任何损失的，我们在法律法规允许范围内免于承担责任：
          </View>
          <View className="pl-4 font-bold space-y-1">
            <View>（1）因不可抗力等因素，包括但不限于政府行为、自然灾害（如洪水、地震、台风等）、战争、罢工、骚乱、疫情等；</View>
            <View>（2）因电力故障、通讯网络故障、黑客攻击、恶意程序攻击、病毒、第三方服务瑕疵等我们不能控制的因素；</View>
            <View>（3）我们对_boot-taro-react_产品及服务的相关系统或设备进行检修、维护、升级、保养。我们将尽最大努力在此种情况下事先通知您。</View>
          </View>
          <View className="font-bold">
            7.3 如有涉嫌借款、投融资、理财或其他涉财产的网络信息、账户密码、广告或推广等信息的，请您格外谨慎对待并自行判断，对您因此遭受的利润、商业信誉、资料损失或其他有形或无形损失，除法律法规另有明确规定外，我们不承担任何直接、间接、连带或惩罚性的赔偿责任。
          </View>
          <View className="font-bold">
            7.4 我们依据法律法规、本协议和平台规则约定获得审核、处理违法违规内容的权利，但该权利不构成我们的义务或承诺，我们不能保证及时发现违法行为或进行相应处理。
          </View>
          <View className="font-bold">
            7.5 本协议旨在保障遵守国家法律法规、维护公序良俗，保护用户和他人合法权益，我们在能力范围内尽最大的努力按照相关法律法规进行判断，但并不保证我们的判断完全与司法机关、行政机关的判断一致。
          </View>
          <View className="font-bold">
            7.6 除非我们另行明确约定或承诺，我们不保证_boot-taro-react_在除官方发布以外的司法辖区内均合法、适当。如果您在_boot-taro-react_官方发布以外的司法辖区使用_boot-taro-react_，您确认该等使用行为是您自身的主动意愿，您将自行保证您使用_boot-taro-react_的行为符合当地所有适用法律的要求，并自行承担相应的风险、责任。
          </View>
          <View className="font-bold">
            7.7 除法律法规另有明确规定外，在任何情况下，我们均不对任何间接性、后果性、惩罚性、偶然性、特殊性或刑罚性的损害承担责任，该等损害包括但不限于您因使用_boot-taro-react_而遭受的利润损失。除法律法规另有明确规定外，我们对您承担的全部责任，无论因何原因或何种行为方式，始终不超过您因使用_boot-taro-react_期间而支付给我们的费用（如有）。
          </View>
          <View className="font-bold">
            7.8 对于用户在_boot-taro-react_上发布的内容，我们不对其真实性、准确性、完整性、适用性、合法性承担任何责任。用户应自行承担因其发布的内容而产生的全部法律责任。
          </View>
          <View className="font-bold">
            7.9 用户在使用_boot-taro-react_过程中与其他用户发生的纠纷，应由纠纷双方通过协商解决。除法律法规另有规定外，我们不对用户间的纠纷承担任何责任。
          </View>
          <View className="font-bold">
            7.10 对于_boot-taro-react_中的第三方服务，包括但不限于第三方链接、广告、推广等内容，我们不对其真实性、准确性、完整性、适用性、合法性承担任何责任。用户应自行判断并承担因使用该等第三方服务而产生的全部风险。
          </View>
        </View>

        <View className="space-y-2">
          <View className="text-text font-medium">8. 用户个人信息保护</View>
          <View className="font-bold">
            8.1 我们与您一同致力于个人信息的保护。保护用户个人信息是我们的基本原则之一。
          </View>
          <View>
            8.2 您在使用_boot-taro-react_的过程中，可能需要提供您的个人信息，以便我们向您提供更好的服务和相应的技术支持。
          </View>
          <View className="font-bold">
            8.3 当您开启或使用_boot-taro-react_时，为实现您选择使用的功能、服务，或为遵守法律法规的要求，我们会处理相关信息。除实现_boot-taro-react_基本功能、服务所需的信息，和根据法律法规要求所必需的信息之外，您可以拒绝我们处理其他信息，但这可能导致我们无法提供对应功能或服务。
          </View>
          <View className="font-bold">
            8.4 我们将依法保护您浏览、修改、删除相关个人信息以及撤回授权的权利，并将运用加密技术、匿名化处理等其他与_boot-taro-react_产品及服务相匹配的安全技术措施保护您的个人信息。
          </View>
          <View>
            8.5 更多关于个人信息保护的内容，请参见
            <Text className="text-primary-6 underline" onClick={handlePrivacyClick}>《_boot-taro-react_隐私政策》</Text>
            。
          </View>
        </View>

        <View className="space-y-2">
          <View className="text-text font-medium">9. 知识产权</View>
          <View>
            9.1 _boot-taro-react_产品和服务的全部知识产权归我们所有，包括但不限于软件、技术、程序、网页、文字、图片、音频、视频、图表、版面设计、电子文档等。我们提供_boot-taro-react_产品及服务时所依托的软件的著作权、专利权及其他知识产权均归我们所有，或我们已获得有效授权。
          </View>
          <View className="font-bold">
            9.2 您理解并承诺，您在使用_boot-taro-react_时发布的内容，包括但不限于文字、图片、视频、音频等各种形式的内容及其中包含的音乐、声音、台词、视觉设计、对话等所有组成部分，均由您原创或已获合法授权。您通过_boot-taro-react_上传、发布所产生内容的知识产权归属您或原始著作权人所有。
          </View>
          <View className="font-bold">
            9.3 为使您的作品得到更好的分享及推广，提高其传播价值及影响力，对于您通过_boot-taro-react_上传发布的各种形式的内容，如文字、图片、音视频及其中包括的音乐、声音、台词、视觉设计、对话等所有组成部分，您授予我们一项全球范围内、免费、非独家、可多层次再许可的权利，包括修改权、复制权、翻译权、汇编权、信息网络传播权、改编权及制作衍生品、表演和展示的权利等。上述权利的使用范围包括在_boot-taro-react_或其他网站、应用程序或智能终端设备等产品上使用。您同意我们有权自行或许可第三方在与上述内容或我们有关的任何宣传、推广、广告、营销和/或研究中使用，也可以通过其他方式开发该等全部或部分内容。上述授予的权利包括使用、复制和展示您拥有或被许可使用并植入内容中的个人形象、肖像、姓名、商标、服务标志、品牌、名称、标识和公司标记（如有）以及任何其他品牌、营销或推广资产、物料、素材等的权利和许可。
          </View>
          <View className="font-bold">
            9.4 为了更好地保护您的权利，您确认我们有权根据前款授权，自行或委托第三方对您上传发布且享有知识产权的内容进行维权，维权形式包括但不限于：监测侵权行为、发送维权函、提起诉讼或仲裁、调解、和解等，我们有权对维权事宜做出决策并独立实施。
          </View>
          <View>
            9.5 基于平台功能的特性，您通过_boot-taro-react_上传发布的内容，可能会：
          </View>
          <View className="pl-4 space-y-1">
            <View>（1）被其他用户以合理方式使用、转发、分享；</View>
            <View>（2）被平台依据算法进行推荐、展示；</View>
            <View>（3）被用于平台功能的优化和改进。</View>
          </View>
          <View>
            如果您发现其他用户在使用时侵犯了您的合法权益，可以通过_boot-taro-react_提供的侵权投诉渠道进行投诉。
          </View>
          <View>
            9.6 我们为_boot-taro-react_开发、运营提供技术支持，并对_boot-taro-react_的开发和运营等过程中产生的所有数据和信息等享有法律法规允许范围内的全部权利。
          </View>
          <View>
            9.7 请您在任何情况下都不要擅自使用"_boot-taro-react_"等与_boot-taro-react_品牌相关的任何商标、服务标记、商号、域名、网站名称或其他品牌标识（统称为"标识"）。未经我们事先书面同意，您不得将本条款前述标识以单独或结合任何方式展示、使用或申请注册商标、注册域名等，也不得实施向他人明示或暗示有权展示、使用或其他有权处理该些标识的行为。由于您违反本协议使用标识给我们或他人造成损失的，由您承担全部法律责任。
          </View>
          <View>
            9.8 您同意采取合理措施保护您的账号和密码信息，保护知识产权，不得以任何方式进行非法转让、出售、出租等行为。
          </View>
        </View>

        <View className="space-y-2">
          <View className="text-text font-medium">10. 广告与推广服务</View>
          <View>
            10.1 您理解并同意，在您使用_boot-taro-react_的过程中，我们可能会向您推送信息、发布广告或提供其他相关服务。我们有权在_boot-taro-react_产品及服务的任何页面上通过各种方式展示_boot-taro-react_和/或第三方供应商、合作伙伴的商业广告、商品推广或其他商业信息。
          </View>
          <View>
            10.2 我们依照法律规定履行广告及推广相关义务。请您在使用_boot-taro-react_时，谨慎甄别广告主通过广告或推广信息向您做出的口头或书面保证。除法律法规明确规定外，您因依据广告或推广信息进行的购买、交易或因前述内容遭受的损害或损失，应自行承担相应后果。
          </View>
        </View>

        <View className="space-y-2">
          <View className="text-text font-medium">11. 税收</View>
          <View>
            根据国家法律法规的规定，您在_boot-taro-react_产生的收入或获得的奖励、收益等可能需要缴纳相关税费或办理纳税申报。您理解并同意，我们根据税务机关的要求代扣代缴税款或代为办理纳税申报时，可能需要收集或使用您的个人信息和涉税资料，您应该配合我们积极履行纳税义务。
          </View>
        </View>

        <View className="space-y-2">
          <View className="text-text font-medium">12. 关于单项服务与第三方服务的特殊约定</View>
          <View>
            12.1 _boot-taro-react_中包含我们以各种合法方式获取的信息或信息内容链接，同时也包含我们合法运营的其他单项服务。这些服务在_boot-taro-react_可能以单独板块形式存在。我们有权不时地增加、减少或改动这些特别板块的设置及服务。
          </View>
          <View>
            12.2 您在_boot-taro-react_中使用第三方提供的产品或服务时，除遵守本协议及_boot-taro-react_中的其他相关规则外，还可能需要您仔细阅读、同意并遵守第三方的协议、相关规则。如因第三方产品或服务产生的争议、损失或损害，需由您自行与第三方依据相关协议解决。
          </View>
          <View>
            12.3 您在_boot-taro-react_可以选择使用您的第三方支付账户及绑定银行卡进行支付，您理解并确认，该支付服务由具备合法资质的第三方向用户提供，除受到本协议约束外，还受第三方支付服务方及金融机构的条款和政策的约束。
          </View>
        </View>

        <View className="space-y-2">
          <View className="text-text font-medium">13. 未成年人使用条款</View>
          <View className="font-bold">
            13.1 若您是未满18周岁的未成年人，您应在监护人指导下认真阅读本协议，经您的监护人同意本协议后，方可使用_boot-taro-react_。若您未取得监护人的同意，监护人可以通过平台公示渠道通知平台处理相关账号，平台有权对相关账号的功能进行限制。
          </View>
          <View className="font-bold">
            13.2 我们重视对未成年人个人信息及隐私的保护。我们特别提醒您在填写未成年人个人信息时应加强保护意识并谨慎发布包含未成年人素材的内容。
          </View>
          <View className="font-bold">
            13.3 我们将与监护人共同努力，保护未成年人身心健康。如果您是监护人，您亦应履行对未成年人的监护义务，关注未成年人网络安全，引导未成年人健康合理使用网络。
          </View>
          <View className="font-bold">
            13.4 青少年用户必须遵守《全国青少年网络文明公约》：
          </View>
          <View className="pl-4 font-bold space-y-1">
            <View>（1）要善于网上学习，不浏览不良信息；</View>
            <View>（2）要诚实友好交流，不侮辱欺诈他人；</View>
            <View>（3）要增强自护意识，不随意约会网友；</View>
            <View>（4）要维护网络安全，不破坏网络秩序；</View>
            <View>（5）要有益身心健康，不沉溺虚拟时空。</View>
          </View>
        </View>

        <View className="space-y-2">
          <View className="text-text font-medium">14. 投诉举报</View>
          <View>
            14.1 我们设立公众投诉、举报渠道，您可以通过本协议末尾提供的联系方式向我们投诉、举报各类违反法律法规、本协议约定的行为及内容，我们将及时受理和处理您的投诉、举报，以共同营造风清气正的网络空间。
          </View>
          <View>
            14.2 如您发现_boot-taro-react_内存在任何侵犯您权利的内容，您可以通过本协议末尾提供的联系方式通知我们，并提供您享有相关权利的证据，我们将会依据相关法律规定及时处理您的投诉。如您在_boot-taro-react_发布的内容被相关权利人投诉侵权并被处理，且您不认可处理结果，您可以通过相同渠道提交不侵权声明及相关权利证明材料进行申诉，我们将依据相关法律规定及时处理您的申诉。
          </View>
        </View>

        <View className="space-y-2">
          <View className="text-text font-medium">15. 违约处理</View>
          <View className="font-bold">
            15.1 如果您违反含平台规则在内的本协议约定，我们有权视情况采取预先警示、拒绝发布、立即停止传输信息、删除内容、短期禁止发布内容或评论、限制账号部分或者全部功能，直至终止提供服务、永久关闭账号等处置措施。对于因此造成_boot-taro-react_功能不可用、账号信息删除、内容删除等不利后果，应由您自行承担。对已删除的用户信息或内容，我们有权不予恢复。
          </View>
          <View>
            15.2 我们有权公告处理结果，且有权根据实际情况决定是否恢复相关账号的使用。对涉嫌违法犯罪的行为，我们将保存有关记录，并有权依法向有关主管部门报告、配合有关主管部门调查。
          </View>
          <View className="font-bold">
            15.3 如您侵犯任何第三方的知识产权、名誉权、姓名权、隐私权等权利及合法权益，引起第三方投诉、举报或以诉讼等方式维权索赔的，我们有权根据法律法规要求采取必要措施。因您的行为导致我们向任何第三方承担赔偿责任，或遭受国家机关处罚，或受到其他经济损失或商誉损失的，您应赔偿我们因此遭受的全部损失。
          </View>
        </View>

        <View className="space-y-2">
          <View className="text-text font-medium">16. 法律适用与争议解决</View>
          <View>
            本协议的订立、执行和解释及争议的解决均应适用中华人民共和国法律。如双方就本协议内容或其执行发生任何争议，双方应尽量友好协商解决。若协商不成，您同意应将争议提交至北京市海淀区有管辖权的人民法院诉讼解决。
          </View>
        </View>

        <View className="space-y-2">
          <View className="text-text font-medium">17. 其他</View>
          <View className="font-bold">
            17.1 本协议的成立、生效、履行、解释及争议的解决均应适用中华人民共和国法律。倘若本协议之任何约定因与相关法律法规抵触而无效，则这些条款应在不违反法律的前提下按照尽可能接近本协议原条文目的之原则进行重新解释和适用，且本协议其它规定仍应具有完整的效力及效果。
          </View>
          <View className="font-bold">
            17.2 本协议的签署地点为中华人民共和国北京市海淀区，若您与我们发生任何争议，双方应尽量友好协商解决，协商不成，您同意应将争议提交至北京市海淀区有管辖权的人民法院诉讼解决。
          </View>
          <View className="font-bold">
            17.3 本协议中的标题仅为方便阅读而设，并不影响本协议中任何约定的含义或解释。
          </View>
          <View className="font-bold">
            17.4 您和我们均是独立的主体，在任何情况下本协议不构成我们对您的任何形式的明示或暗示担保或条件，双方之间亦不构成代理、合伙、合营或雇佣关系。
          </View>
          <View className="font-bold">
            17.5 本协议构成双方就本协议约定事项所达成的完整协议，取代双方此前就该等事项所达成的任何口头或书面协议、谅解、备忘等。
          </View>
          <View className="font-bold">
            17.6 我们未就您违反本协议的某一条款采取行动，不意味着我们放弃就您后续或继续违反该条款或其他条款采取行动的权利。
          </View>
          <View className="font-bold">
            17.7 本协议任何条款的部分或全部无效者，不影响其他条款的效力。
          </View>
          <View className="font-bold">
            17.8 本协议以中文书写，任何对本协议的翻译仅为方便用户而提供，若存在任何冲突，应以中文版本为准。
          </View>
          <View className="font-bold">
            17.9 我们可能会以网站公告、站内信、电子邮件、手机短信或常规的信件传送等方式向您发出通知，该等通知在发送时即视为已送达您。
          </View>
          <View className="font-bold">
            17.10 本协议中未明确规定的权利，我们在法律法规允许的范围内保留解释和处理的权利。
          </View>
          <View className="font-bold">
            17.11 本协议部分条款被认定为无效或者无法执行的，不影响本协议其他条款的效力。本协议中止或终止后，关于知识产权、保密、违约责任、法律适用与争议解决的条款仍然有效。
          </View>
          <View>
            当您有其他的投诉、建议时，您可以通过以下方式联系我们：
          </View>
          <View className="pl-4 space-y-1">
            <View>📫 邮箱：_EMAIL_</View>
            <View>📞 电话：_PHONE_</View>
            <View>🗺️ 地址：_ADDRESS_</View>
          </View>
        </View>
      </View>
    </PageWrapper>
  );
}
